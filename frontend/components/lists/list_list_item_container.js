import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { Link } from 'react-router-dom';

import ListPosterItemContainer from './list_poster_item_container'
import review_form from '../shows_show/review_form';

const List = ({ list, user }) => {
    const { title, description, listings, id } = list;

    return (
        <div className="list-show-item-container">

            <div className="list-show-item">

                {listings ? 
                    <Link to={"/lists/" + id}>
                        <ul className="list-posters">
                            {Object.values(listings).slice(0,10).map(listing => {
                                return (
                                    // <img src="poster_path.poster_path"></img>
                                    <li key={listing.poster_path}>
                                        <img className="list-poster"
                                            src={
                                                listing ?
                                                "https://image.tmdb.org/t/p/w500/" + listing.poster_path
                                                : "https://image.tmdb.org/t/p/w500//8KPH2kKDEBGA6W2mdKjHqzYIv63.jpg"} 
                                                
                                                
                                                />
                                    </li>
                                )
                            })}
                            {/* The following is an example of WET code */}
                            { Object.values(listings).length < 2 ? 
                                (<li key="placeholder-2"><img className="list-poster" src={window.testPoster} /></li>) 
                                : 
                                null }
                            { Object.values(listings).length < 3 ? 
                                (<li key="placeholder-3"><img className="list-poster" src={window.testPoster} /></li>) 
                                : 
                                null }
                            { Object.values(listings).length < 4 ? 
                                (<li key="placeholder-4"><img className="list-poster" src={window.testPoster} /></li>) 
                                : 
                                null }
                            { Object.values(listings).length < 5 ? 
                                (<li key="placeholder-5"><img className="list-poster" src={window.testPoster} /></li>) 
                                : 
                                null }
                            { Object.values(listings).length < 6 ? 
                                (<li key="placeholder-6"><img className="list-poster" src={window.testPoster} /></li>) 
                                : 
                                null }
                            { Object.values(listings).length < 7 ? 
                                (<li key="placeholder-7"><img className="list-poster" src={window.testPoster} /></li>) 
                                : 
                                null }
                            { Object.values(listings).length < 8 ? 
                                (<li key="placeholder-8"><img className="list-poster" src={window.testPoster} /></li>) 
                                : 
                                null }
                            { Object.values(listings).length < 9 ? 
                                (<li key="placeholder-9"><img className="list-poster" src={window.testPoster} /></li>) 
                                : 
                                null }
                            { Object.values(listings).length < 10 ? 
                                (<li key="placeholder-10"><img className="list-poster" src={window.testPoster} /></li>) 
                                : 
                                null }
                        </ul>
                    </Link>
                    : 
                    (
                        <Link to={"/lists/" + id}>
                            <ul className="list-posters">
                                <li key="placeholder-1"><img className="list-poster" src={window.testPoster}/></li>
                                <li key="placeholder-2"><img className="list-poster" src={window.testPoster}/></li>
                                <li key="placeholder-3"><img className="list-poster" src={window.testPoster}/></li>
                                <li key="placeholder-4"><img className="list-poster" src={window.testPoster}/></li>
                                <li key="placeholder-5"><img className="list-poster" src={window.testPoster}/></li>
                                <li key="placeholder-6"><img className="list-poster" src={window.testPoster}/></li>
                                <li key="placeholder-7"><img className="list-poster" src={window.testPoster}/></li>
                                <li key="placeholder-8"><img className="list-poster" src={window.testPoster}/></li>
                                <li key="placeholder-9"><img className="list-poster" src={window.testPoster}/></li>
                                <li key="placeholder-10"><img className="list-poster" src={window.testPoster}/></li>
                            </ul>
                        </Link>
                    ) 
                }
                
                <div className="list-posters-info">
                    <Link to={"/lists/" + id} className="list-show-title">
                        {title}
                    </Link>
                    {user ? (<div className="list-profile">
                        <div className="profile-pic"><img src={user.id % 10 === 7 ? window.profSnowball : (user.id % 10 === 6 ? window.profSanta : (user.id % 10 === 5 ? window.profGrandma : (user.id % 10 === 4 ? window.profGrandpa : (user.id % 10 === 3 ? window.profMaggie : (user.id % 10 === 2 ? window.profBart : (user.id % 10 === 1 ? window.profLisa : (user.id % 10 === 0 ? window.profMarge : (user.id % 10 === 8 ? window.profTV : window.profHomer))))))))} /></div>
                        {user.username}
                    </div>) : null}
                    <p className="">{description}</p>
                </div>

            </div>

        </div>
    );
};

const mapStateToProps = ({ entities: { users }, session: { currentUserId } }, { list }) => {
    return {
        user: users[list.user_id],
    };
};

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
});


export default connect(mapStateToProps, mapDispatchToProps)(List);