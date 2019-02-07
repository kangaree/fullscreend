import { connect } from 'react-redux';

import Reviews from './reviews';
import { fetchReviews, deleteReview } from '../../actions/show_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    const reviews = state.entities.reviews ? Object.values(state.entities.reviews) : []; 

    return {
        currentUser: state.entities.users[state.session.currentUserId],
        reviews,
    };
};

const mapDispatchToProps = dispatch => {
    // debugger
    return {
        fetchReviews: () => dispatch(fetchReviews()),
        openModal: modal => dispatch(openModal(modal)),
        deleteReview: reviewId => dispatch(deleteReview(reviewId)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Reviews);