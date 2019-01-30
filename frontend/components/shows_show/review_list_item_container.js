import React from 'react';
import { connect } from 'react-redux';

const Review = ({ review, user }) => {
    const { rating, body } = review;
    return (
        <div>
            <ul>
                <li>Rating: {rating}</li>
                <li>{body} - by {user.username}</li>

            </ul>
        </div>
    );
};

const mapStateToProps = ({ entities: { users } }, { review }) => {
    return {
        user: users[review.user_id]
    };
};

export default connect(mapStateToProps)(Review);