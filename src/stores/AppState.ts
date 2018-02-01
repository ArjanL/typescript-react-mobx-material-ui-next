import { observable, action } from 'mobx';

interface photo{
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}

export default class AppState {
  @observable authenticated: boolean;
  @observable authenticating: boolean;
  @observable items;
  @observable item;

  constructor() {
    this.authenticated = true;
    this.authenticating = false;
    this.items = [];
    this.item = {};
  }

  async fetchData(pathname, id) {
    let apiPath = "";
    id == null ? apiPath = pathname : apiPath = pathname +'/'+ id;
    console.log('API FETCH: '+pathname);


   const result = await fetch(`https://jsonplaceholder.typicode.com/${apiPath}`)
   .then(response => response.json())
   .then(data => {
      data.length > 0 ? this.setData(data) : this.setSingle(data);
      console.log(data);
    });


  }

  @action setData(data) {
    this.items = data;
  }

  @action setSingle(data) {
    this.item = data;
  }

  @action clearItems() {
    this.items = [];
    this.item = {};
  }

  @action authenticate(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.authenticating = true;
      setTimeout(() => {
        this.authenticated = !this.authenticated;
        this.authenticating = false;
        resolve(this.authenticated);
      }, 0);
    });
  }
}