import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
// import Dashboard from './Dashboard';

const MenuBar = () => {
    return (
        <div>
            <Link to="login">
                To Login Page
            </Link>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
            </Switch>
        </div>
    );
}

export default MenuBar;
