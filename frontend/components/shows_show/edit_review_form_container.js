import React from 'react';
import { connect } from 'react-redux';

import { fetchReview, updateReview } from '../../actions/show_actions';
import ReviewForm from './review_form';

import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {

    const defaultReview = {};

    // ownProps.match.params.reviewId this ain't it chief
    const review = state.reviews[ownProps.match.params.reviewId] || defaultReview;

    return {
        currentUserId: state.ui.currentUserId,
        show: state.entities.shows[state.ui.shows_show],
        review,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchReview: id => dispatch(fetchReview(id)),
        closeModal: () => dispatch(closeModal()),
        updateReview: review => dispatch(updateReview(review)),
    }
};

class EditReviewForm extends React.Component {
    componentDidMount() {
        this.props.fetchReview(this.props.review.id);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.review.id != this.props.review.id) {
            this.props.fetchReview(this.props.review.id);
        }
    }

    render() {
        const { action, review } = this.props;
        return (
            <ReviewForm
                action={action}
                review={review} />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditReviewForm);