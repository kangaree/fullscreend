import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

const Review = ({ review, user, deleteReview, show, openModal, currentUser }) => {
    const { score, body, like, season_progress, date_watched } = review;
    
    return (
        <div className="review-list-index-container">
            <div className="review-author"> 
                <div className="profile-pic"><img src={user.id % 10 === 7 ? window.profSnowball : (user.id % 10 === 6 ? window.profSanta : (user.id % 10 === 5 ? window.profGrandma : (user.id % 10 === 4 ? window.profGrandpa : (user.id % 10 === 3 ? window.profMaggie : (user.id % 10 === 2 ? window.profBart : (user.id % 10 === 1 ? window.profLisa : (user.id % 10 === 0 ? window.profMarge : (user.id % 10 === 8 ? window.profTV : window.profHomer))))))))}/></div>
                <div className="review-by-margin-right-less">Review by</div><b>{user.username}</b>

                {score ? (<div className="five-stars-index">
                    <div className="index-star" ><i className="fas fa-star" style={parseInt(score) >= 1 ? { color: "#00e24b" } : { display: "none" }}></i></div>
                    <div className="index-star"><i className="fas fa-star" style={parseInt(score) >= 2 ? { color: "#00e24b" } : { display: "none" }}></i></div>
                    <div className="index-star"><i className="fas fa-star" style={parseInt(score) >= 3 ? { color: "#00e24b" } : { display: "none" }}></i></div>
                    <div className="index-star"><i className="fas fa-star" style={parseInt(score) >= 4 ? { color: "#00e24b" } : { display: "none" }}></i></div>
                    <div className="index-star"><i className="fas fa-star" style={parseInt(score) >= 5 ? { color: "#00e24b" } : { display: "none" }}></i></div>
                </div>) : null }

                {like ? (<div className="index-heart"><i className="fas fa-heart" style={like ? { color: "orange" } : { display: "none" }}></i></div>) : null}
                
                {season_progress ? (<div>{season_progress ? `S${season_progress}` : null}</div>) : null }

                {date_watched ? (<div>{date_watched ? date_watched : null}</div>) : null }

                {currentUser ? (currentUser.id == review.user_id ? 
                    <>
                        <div onClick={() => deleteReview(review.id)} className="delete-review-button"><i className="fas fa-trash"></i></div>
                        <div onClick={() => openModal({ modal_type: 'edit-review', options: { review } })} className="edit-review-button"><i className="fas fa-edit"></i></div>
                    </>
                    : null) : null}
                    
            </div>
            <div className="show-review-index">
                { body ? <p>{body}</p> : <p><i className="fas fa-bookmark"></i></p> }
                
            </div>

        </div>
    );
};

const mapStateToProps = ({ entities: { users }, session: { currentUserId } }, { review }) => {
    return {
        user: users[review.user_id],
        currentUser: users[currentUserId]
    };
};

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
});


export default connect(mapStateToProps, mapDispatchToProps)(Review);