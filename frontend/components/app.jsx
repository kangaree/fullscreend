import React from 'react';
import Modal from './modal/modal'
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import FooterContainer from './footer/footer_container';
import ShowsSearchContainer from './shows_search/shows_search_container';
import ShowsPopularContainer from './shows_popular/shows_popular_container';
import ShowsShowContainer from './shows_show/shows_show_container';
import ReviewsContainer from './reviews/reviews_container';
import Home from './home/home';
import Lists from './lists/lists';
import Blank from './blank/blank';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../utils/route_utils';
import { ProtectedRoute } from '../utils/route_utils';

export default () => (
    <div>
        <Modal />
        <header><Route path="/" component={NavBarContainer} /></header>
        {/* <ShowsSearchContainer /> */}
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/lists" component={Lists} />
            <Route exact path="/shows/:showId" component={ShowsShowContainer}/>
            <Route exact path="/shows/pages/:page" component={ShowsPopularContainer} />
            <Route exact path="/shows" component={ShowsPopularContainer} />
            <Route exact path="/reviews" component={ReviewsContainer} />
            <Route path="/" component={Blank} />
        </Switch>

        <Route path="/" component={FooterContainer} />
    </div>
);