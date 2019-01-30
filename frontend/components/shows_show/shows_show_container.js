import { connect } from 'react-redux';

import ShowsShow from './shows_show';
import { fetchShow, fetchShowReviews } from '../../actions/show_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    const show = state.entities.shows[state.ui.shows_show];
    const reviews = state.ui.show_reviews.map(reviewId => state.entities.reviews[reviewId])

    return {
        currentUser: state.entities.users[state.session.currentUserId],
        show,
        reviews,
    };
};

const mapDispatchToProps = dispatch => ({
    fetchShow: id => dispatch(fetchShow(id)),
    openModal: modal => dispatch(openModal(modal)),
    fetchShowReviews: showId => dispatch(fetchShowReviews(showId)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowsShow);