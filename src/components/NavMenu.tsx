import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Route, Link } from 'react-router-dom';

import AppState from '../stores/AppState';

@inject('store') @observer
export default class NavMenu extends React.Component<{ store?: AppState }, any> {
    store: AppState;

    constructor(props) {
        super(props);
        this.store = this.store;
    }

    authenticate(e) {
        if (e) e.preventDefault();
        this.props.store.authenticate();
    }

    render() {
        const { authenticated, authenticating } = this.store;
        return (
            <nav>
                <Link to='/'>Home</Link>
                {authenticated && <Link to='/posts'>Posts</Link>}
            </nav>
        );
    }
}