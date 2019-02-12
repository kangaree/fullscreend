import { connect } from 'react-redux';

import Lists from './lists';
import { fetchLists, deleteList } from '../../actions/list_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    const lists = state.entities.lists ? Object.values(state.entities.lists) : [];

    return {
        currentUser: state.entities.users[state.session.currentUserId],
        lists,
    };
};

const mapDispatchToProps = dispatch => {
    // debugger
    return {
        fetchLists: () => dispatch(fetchLists()),
        deleteReview: listId => dispatch(deleteList(listId)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Lists);