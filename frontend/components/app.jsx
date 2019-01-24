import React from 'react';
import WelcomeBar from './nav_bar/welcome_bar_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import FooterContainer from './footer/footer_container';
import Home from './home/home';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../utils/route_utils';
import { ProtectedRoute } from '../utils/route_utils';

export default () => (
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/" component={NavBarContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
        <AuthRoute path="/signup" component={SignupContainer} />
        <Route path="/" component={FooterContainer} />
    </div>
);