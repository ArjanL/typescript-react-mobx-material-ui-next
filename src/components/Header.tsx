import * as React from 'react';
import { Provider, inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { Button } from 'material-ui';
import NavMenu from './NavMenu';
import AppState from '../stores/AppState';



@inject('store') @observer
export default class Header extends React.Component<{ store?: AppState }, any> {
    store: AppState;

    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    authenticate(e) {
        if (e) e.preventDefault();
        console.log('CLICKED BUTTON');
        this.store.authenticate();
    }

    render() {
        const { authenticated } = this.store;
        return (
            <div className='topbar'>
                <NavMenu store={this.store} />
                <Button onClick={this.authenticate.bind(this)} title={authenticated ? 'Log out' : 'Sign in'} />
            </div>
        );
    }

}