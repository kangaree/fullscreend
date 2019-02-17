import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { Link } from 'react-router-dom';

import ListPosterItemContainer from './list_poster_item_container'
import review_form from '../shows_show/review_form';

const List = ({ list, user }) => {
    const { title, description, listings, id } = list;
    // debugger

    return (
        <div className="list-item-container">

            <div className="list-index">

                <Link to={"/lists/" + id}>
                    <h3 className="">{title}</h3>
                    {user ? (<p>by {user.username}</p>) : null}
                    {listings ? 
                        <ul className="list-posters">
                            {Object.values(listings).map(listing => {
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
                        </ul>
                        : 
                        null
                        }
                </Link>

                <p className="">{description}</p>

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