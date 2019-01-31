import React from 'react';
import { connect } from 'react-redux';

const Review = ({ review, user }) => {
    const { score, body, like, season_progress, date_watched } = review;
    return (
        <div>
            <ul className="show-review-index">
                <li>{body}</li>
                <li className="five-stars">
                    <div className="index-star" ><i className="fas fa-star" style={parseInt(score) >= 1 ? { color: "#00e24b" } : { display: "none" }}></i></div>
                    <div className="index-star"><i className="fas fa-star" style={parseInt(score) >= 2 ? { color: "#00e24b" } : { display: "none" }}></i></div>
                    <div className="index-star"><i className="fas fa-star" style={parseInt(score) >= 3 ? { color: "#00e24b" } : { display: "none" }}></i></div>
                    <div className="index-star"><i className="fas fa-star" style={parseInt(score) >= 4 ? { color: "#00e24b" } : { display: "none" }}></i></div>
                    <div className="index-star"><i className="fas fa-star" style={parseInt(score) >= 5 ? { color: "#00e24b" } : { display: "none" }}></i></div>
                    <div className="index-star"><i className="fas fa-heart" style={like ? { color: "orange" } : { display: "none" }}></i></div>
                </li>
                {season_progress ? <li><p>S{season_progress}</p></li> : null}
                {date_watched ? <li><p>{date_watched}</p></li> : null}
            </ul>
                <p className="review-author">by{" " + user.username}</p>
        </div>
    );
};

const mapStateToProps = ({ entities: { users } }, { review }) => {
    return {
        user: users[review.user_id]
    };
};

export default connect(mapStateToProps)(Review);