import React from 'react';
import { connect } from 'react-redux';

import { fetchReview, updateReview } from '../../actions/show_actions';
import ReviewForm from './review_form';

import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {

    // const defaultReview = {
    //     date_watched: "",
    //     season_progress: "",
    //     body: "",
    //     score: "",
    //     like: null
    // };

    // ownProps.match.params.reviewId - dis ain't it chief
    // const review = state.reviews[ownProps.review.id] || defaultReview;

    return {
        currentUserId: parseInt(state.session.currentUserId),
        show: state.entities.shows[state.ui.shows_show],
        // review,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        updateReview: review => dispatch(updateReview(review)),
    }
};

class EditReviewForm extends React.Component {
    // componentDidMount() {
    //     this.props.fetchReview(this.props.review.id);
    // }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.review.id != this.props.review.id) {
    //         this.props.fetchReview(this.props.review.id);
    //     }
    // }

    render() {
        const { action, review, show, closeModal, updateReview, currentUserId } = this.props;
        return (
            <ReviewForm
                action={action}
                review={review}
                show={show}
                closeModal={closeModal}
                updateReview={updateReview}
                currentUserId={currentUserId} />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditReviewForm);