import React from 'react';
import Modal from './modal/modal'
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import FooterContainer from './footer/footer_container';
import ShowsSearchContainer from './shows_search/shows_search_container';
import Home from './home/home';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../utils/route_utils';
import { ProtectedRoute } from '../utils/route_utils';

export default () => (
    <div>
        <Modal />
        <header><Route path="/" component={NavBarContainer} /></header>
        <Route path="/" component={ShowsSearchContainer} />
        <Route path="/" component={FooterContainer} />

        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>

    </div>
);