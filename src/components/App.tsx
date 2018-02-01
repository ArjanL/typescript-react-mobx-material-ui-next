import * as React from 'react';
import { AppBar, Toolbar, Button, Grid, Typography } from 'material-ui';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Provider, observer } from 'mobx-react';
import AppState from '../stores/AppState';
import Header from './Header';
import NavMenu from './NavMenu';
import { Home } from './Home';
import { ContactForm } from './ContactForm';
import Login from './Login';
import Devtools from 'mobx-react-devtools';





@observer
export default class App extends React.Component<{ store: AppState }, any>{
    store: AppState;

    constructor(props: any){
        super(props);
        this.store = this.props.store;
    }

    componentDidMount() {
        this.authenticate();
    }   

    authenticate(e?: React.SyntheticEvent<HTMLElement>) {
        if (e) e.preventDefault();
        this.props.store.authenticate();
    }

    render() {
        // const { authenticated, authenticating, timeToRefresh, refreshToken } = this.store;
        const { authenticated, authenticating } = this.store;
        {/*<TopBar /><DevTools />*/}
        return (
            
            <AppBar position="static">
                <Toolbar>
                    <Typography type="title" color="inherit">HeaderText</Typography>
                </Toolbar>
            </AppBar>
            

            // <Router>
            //     <>
            //     <Route exact path="/" component={Home} />
            //     <Route exact path="/contact" component={ContactForm} />
            //     </>
            // </Router>
        );
    }

}