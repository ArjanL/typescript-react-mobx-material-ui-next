import {observable} from 'mobx';
import ProductStore from '../stores/ProductStore';
export default class ProductModel {
	store: ProductStore;
	id: string;
	@observable title: string;
	@observable completed: boolean;

	constructor(store: ProductStore, id: string, title: string, completed: boolean) {
		this.store = store;
		this.id = id;
		this.title = title;
		this.completed = completed;
	}

	toggle() {
		this.completed = !this.completed;
	}

	destroy() {
		this.store.todos.remove(this);
	}

	setTitle(title: string) {
		this.title = title;
	}

	toJS() {
		return {
			id: this.id,
			title: this.title,
			completed: this.completed
		};
	}

	static fromJS(store: ProductStore, object: ProductModel) {
		return new ProductModel(store, object.id, object.title, object.completed);
	}
}