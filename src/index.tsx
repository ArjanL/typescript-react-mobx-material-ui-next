import * as React from 'react';
import { render } from 'react-dom';
import { Button, Grid, Typography } from 'material-ui';
import { observable, action, computed } from 'mobx';
import { Provider, observer } from 'mobx-react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import AppState from './stores/AppState';
import App from './components/App';
import MobxReactDevtools from 'mobx-react-devtools';


const rootElement = document.querySelector('#root');
const store = new AppState();



if(rootElement){
  render(<App store={store} />, rootElement);
}