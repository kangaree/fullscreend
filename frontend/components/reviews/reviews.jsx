import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { ReviewLink } from '../../utils/link_util';

// import LoadingIcon from './loading_icon';

import ReviewListItemContainer from './review_list_item_container'

class Reviews extends Component {
    componentDidMount() {
        if (this.props.currentUser) {this.props.fetchReviews()};
    }

    // componentDidUpdate() {
    //     if (this.props.currentUser) { this.props.fetchReviews() };
    // }

    render() {
        const { openModal, currentUser, reviews, } = this.props;

        // debugger

        return (
            <>
                <div className="blank-header"></div>
                <div className="all-review-index-background">
                    <h2 className="stream-title">STREAM</h2>
                    {currentUser ? reviews.map(review => (
                        <ReviewListItemContainer
                            review={review}
                            key={review.id}
                            deleteReview={this.props.deleteReview}
                            updateReview={this.props.updateReview}
                            openModal={this.props.openModal}
                        />
                        )).reverse()
                        : 
                        null}
                </div>


            </>
        );
    }
}
export default Reviews;