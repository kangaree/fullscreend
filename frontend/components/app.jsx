import React from 'react';
import Modal from './modal/modal'
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import FooterContainer from './footer/footer_container';
import ShowsSearchContainer from './shows_search/shows_search_container';
import ShowsPopularContainer from './shows_popular/shows_popular_container';
import ShowsShowContainer from './shows_show/shows_show_container';
import ShowsSearchIndexContainer from './shows_search/shows_search_index_container';
import ReviewsContainer from './reviews/reviews_container';
import ListsContainer from './lists/lists_container';
import CreateListContainer from './lists/create_list_form_container';
import UserListsContainer from './lists/user_lists_container';
import ListsShowContainer from './lists/lists_show_container';
import HomeContainer from './home/home_container';
import BigList from './biglist/biglist';
import About from './about/about';
import Help from './help/help';
import Credit from './credit/credit';
import Contact from './contact/contact';
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
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/about" component={About} />
            <Route exact path="/help" component={Help} />
            <Route exact path="/credit" component={Credit} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/biglist" component={BigList} />
            <Route exact path="/shows/:showId" component={ShowsShowContainer}/>
            <Route exact path="/shows/pages/:page" component={ShowsPopularContainer} />
            <Route exact path="/shows" component={ShowsPopularContainer} />
            <Route exact path="/search/:searchTerm" component={ShowsSearchIndexContainer} />
            <ProtectedRoute exact path="/reviews" component={ReviewsContainer} />
            <ProtectedRoute exact path="/lists" component={ListsContainer} />
            <ProtectedRoute exact path="/lists/new" component={CreateListContainer} />
            <ProtectedRoute exact path="/users/:userId/lists" component={UserListsContainer} />
            <ProtectedRoute exact path="/lists/:listId" component={ListsShowContainer} />
            <Route path="/" component={Blank} />
        </Switch>

        <Route path="/" component={FooterContainer} />
    </div>
);