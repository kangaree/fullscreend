import { connect } from 'react-redux';

import ShowsShow from './shows_show';
import { fetchShow, fetchShowReviews, deleteReview, fetchShowSeason } from '../../actions/show_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    const show = state.entities.shows[state.ui.shows_show];
    const season = state.entities.shows[state.ui.shows_show] ? state.entities.shows[state.ui.shows_show].season : null;
    const reviews = state.ui.show_reviews.map(reviewId => state.entities.reviews[reviewId])
    const showReviewIds = state.ui.show_reviews

    return {
        currentUser: state.entities.users[state.session.currentUserId],
        show,
        reviews,
        showReviewIds,
        loading: state.ui.loading.detailLoading,
        season,
    };
};

const mapDispatchToProps = dispatch => ({
    fetchShow: id => dispatch(fetchShow(id)),
    openModal: modal => dispatch(openModal(modal)),
    fetchShowReviews: showId => dispatch(fetchShowReviews(showId)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId)),
    fetchShowSeason: (showId, seasonNumber) => dispatch(fetchShowSeason(showId, seasonNumber)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowsShow);