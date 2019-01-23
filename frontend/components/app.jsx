import React from 'react';
import WelcomeBar from './nav_bar/welcome_bar_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './session/signup_container';
import Home from './home/home';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../utils/route_utils';
import { ProtectedRoute } from '../utils/route_utils';

export default () => (
    <div>
        <Route path="/" component={NavBarContainer} />
        <Route exact path="/" component={Home} />
        <AuthRoute path="/signup" component={SignupContainer} />
    </div>
);