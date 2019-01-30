import { connect } from 'react-redux';

import ShowsShow from './shows_show';
import { fetchShow } from '../../actions/show_actions';
import { openModal } from '../../actions/modal_actions';
import { selectReviewsForShow, selectShow } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
    const show = state.entities.shows[state.ui.shows_show];
    // const reviews = selectReviewsForShow(state.entities, show);
    return {
        show,
        currentUser: state.entities.users[state.session.currentUserId]
    };
};

const mapDispatchToProps = dispatch => ({
    fetchShow: id => dispatch(fetchShow(id)),
    openModal: modal => dispatch(openModal(modal)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowsShow);