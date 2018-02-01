import { observable, action, computed, reaction, IObservableArray } from 'mobx';
import ProductModel from '../models/ProductModel';

export default class ProductStore {
    @observable todos = <IObservableArray<ProductModel>>[];
  

  }