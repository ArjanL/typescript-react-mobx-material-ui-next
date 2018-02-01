import { observable, action, computed } from 'mobx';
import { observer } from 'mobx-react';

export default class HomeStore {
    @observable clickedCount = 0;
  
    @action
    increment() {
      this.clickedCount++;
    }
  
    @computed
    get hasBeenClicked() {
      console.log('has been clicked by homestore');
      return this.clickedCount > 0;
    }
    
  }