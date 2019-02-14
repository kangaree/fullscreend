import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { Link } from 'react-router-dom';

import ListPosterItemContainer from './list_poster_item_container'

const List = ({ list }) => {
    const { title, description, poster_paths } = list;

    return (
        <div className="list-item-container">

            <div className="list-index">

                <div className="">
                    {poster_paths ? 
                        <ul className="list-posters">
                            {Object.values(poster_paths).map(poster_path => {
                                return (
                                    // <img src="poster_path.poster_path"></img>
                                    <li key={poster_path.poster_path}>
                                        <img className="list-poster"
                                            src={
                                                poster_path ?
                                                    "https://image.tmdb.org/t/p/w500/" + poster_path.poster_path
                                                    : "https://image.tmdb.org/t/p/w500//8KPH2kKDEBGA6W2mdKjHqzYIv63.jpg"} 
                                        
                                            
                                        />
                                    </li>
                                )
                            })}
                        </ul>
                        : 
                        null
                        }
                </div>

                <h3 className="">{title}</h3>
                <p className="">{description}</p>

            </div>

        </div>
    );
};

const mapStateToProps = ({ entities: { users }, session: { currentUserId } }, { list }) => {
    return {
        user: users[list.user_id],
        currentUser: users[currentUserId]
    };
};

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
});


export default connect(mapStateToProps, mapDispatchToProps)(List);