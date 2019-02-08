import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { Link } from 'react-router-dom';

const Review = ({ review, deleteReview, openModal, currentUser, user }) => {
    const { score, body, like, season_progress, date_watched, show_title, poster_path } = review;
    
    if (body) {return (
        <div className="all-review-index-body-container">

            <div className="all-review-index">

            <div className="profile-pic"><img src={user.id % 10 === 7 ? window.profSnowball : (user.id % 10 === 6 ? window.profSanta : (user.id % 10 === 5 ? window.profGrandma : (user.id % 10 === 4 ? window.profGrandpa : (user.id % 10 === 3 ? window.profMaggie : (user.id % 10 === 2 ? window.profBart : (user.id % 10 === 1 ? window.profLisa : (user.id % 10 === 0 ? window.profMarge : (user.id % 10 === 8 ? window.profTV : window.profHomer))))))))}/></div>

                <Link to={"/shows/" + review.show_id} className="">
                    <img className="all-review-show-poster"
                        src={
                            poster_path ?
                                "https://image.tmdb.org/t/p/w500/" + poster_path
                                : "https://image.tmdb.org/t/p/w500//8KPH2kKDEBGA6W2mdKjHqzYIv63.jpg"} />
                </Link>

                {/* <img    className="all-review-show-poster"
                        src={
                            poster_path ?
                            "https://image.tmdb.org/t/p/w500/" + poster_path
                            : "https://image.tmdb.org/t/p/w500//8KPH2kKDEBGA6W2mdKjHqzYIv63.jpg"} /> */}

                <div>
                    <div className="review-author-body">
                        <b>{user.username}</b>watched
                    </div>

                    <Link to={"/shows/" + review.show_id} className="all-review-index-show-body-title">{show_title}</Link>

                    <div className="all-review-index-symbols">
                        {score ? (<div className="five-stars-index">
                            <div className="index-star" ><i className="fas fa-star" style={parseInt(score) >= 1 ? { color: "#00e24b" } : { display: "none" }}></i></div>
                            <div className="index-star"><i className="fas fa-star" style={parseInt(score) >= 2 ? { color: "#00e24b" } : { display: "none" }}></i></div>
                            <div className="index-star"><i className="fas fa-star" style={parseInt(score) >= 3 ? { color: "#00e24b" } : { display: "none" }}></i></div>
                            <div className="index-star"><i className="fas fa-star" style={parseInt(score) >= 4 ? { color: "#00e24b" } : { display: "none" }}></i></div>
                            <div className="index-star"><i className="fas fa-star" style={parseInt(score) >= 5 ? { color: "#00e24b" } : { display: "none" }}></i></div>
                        </div>) : null}

                        {like ? (<div className="index-heart"><i className="fas fa-heart" style={like ? { color: "orange" } : { display: "none" }}></i></div>) : null}

                        {season_progress ? (<div>{season_progress ? `S${season_progress}` : null}</div>) : null}

                        {date_watched ? (<div>{date_watched ? date_watched : null}</div>) : null}
                    </div>
                    <p className="all-review-index-body">{body}</p>
                    <div className="delete-edit-buttons">
                        {currentUser.id == review.user_id ? <div onClick={() => deleteReview(review.id)} className="delete-review-button"><i className="fas fa-trash"></i></div> : null}
                        {currentUser.id == review.user_id ? <div onClick={() => openModal({ modal_type: 'edit-review', options: { review } })} className="edit-review-button"><i className="fas fa-edit"></i></div> : null}
                    </div>
                </div>
                
            </div>

        </div>
    );} else {
        return (
            <div className="all-review-index-log-container">
                <div className="review-author">
                    <div className="profile-pic"><img src={user.id % 10 === 7 ? window.profSnowball : (user.id % 10 === 6 ? window.profSanta : (user.id % 10 === 5 ? window.profGrandma : (user.id % 10 === 4 ? window.profGrandpa : (user.id % 10 === 3 ? window.profMaggie : (user.id % 10 === 2 ? window.profBart : (user.id % 10 === 1 ? window.profLisa : (user.id % 10 === 0 ? window.profMarge : (user.id % 10 === 8 ? window.profTV : window.profHomer))))))))} /></div>
                    <b>{user.username}</b>
                    <div className="review-by-margin-right-less">watched</div>

                    <Link to={"/shows/" + review.show_id} className="all-review-index-show-title">{show_title}</Link>


                    {score ? (<div className="five-stars-index">
                        <div className="index-star" ><i className="fas fa-star"></i></div>
                        <div className="index-star"><i className="fas fa-star"></i></div>
                        <div className="index-star"><i className="fas fa-star"></i></div>
                        <div className="index-star"><i className="fas fa-star"></i></div>
                        <div className="index-star"><i className="fas fa-star"></i></div>
                    </div>) : null}

                    {like ? (<div className="index-heart"><i className="fas fa-heart"></i></div>) : null}

                    {season_progress ? (<div>{season_progress ? `S${season_progress}` : null}</div>) : null}

                    {date_watched ? (<div>{date_watched ? date_watched : null}</div>) : null}

                    {currentUser.id == review.user_id ? <div onClick={() => deleteReview(review.id)} className="delete-review-button"><i className="fas fa-trash"></i></div> : null}
                    {currentUser.id == review.user_id ? <div onClick={() => openModal({ modal_type: 'edit-review', options: { review } })} className="edit-review-button"><i className="fas fa-edit"></i></div> : null}
                </div>

            </div>
        )
    }
};

const mapStateToProps = ({ entities: { users }, session: { currentUserId } }, { review }) => {
    // debugger
    return {
        user: users[review.user_id],
        currentUser: users[currentUserId]
    };
};

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
});


export default connect(mapStateToProps, mapDispatchToProps)(Review);