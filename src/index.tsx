import * as React from 'react';
import { render } from 'react-dom';

import { observable, action, computed } from 'mobx';
import { Provider, observer } from 'mobx-react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import AppState from './stores/AppState';
import App from './components/App';
import MobxReactDevtools from 'mobx-react-devtools';

declare var module: any;

const rootElement = document.querySelector('#root');
const store = new AppState();
store.fetchData("photos",1);


if(rootElement){
  render(<App store={store} />, rootElement);
}