import { connect } from 'react-redux';

import ShowsShow from './shows_show';
import { fetchShow } from '../../actions/show_actions';
// import { selectPokeItems } from '../../reducers/selectors';

import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger
    // const show = state.entities.show[ownProps.match.params.showId];
    const show = state.entities.shows[state.ui.shows_show];
    // debugger
    return {
        show,
        currentUser: state.entities.users[state.session.currentUserId]
        // items: selectPokeItems(state, pokemon),
        // loading: state.ui.loading.detailLoading
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