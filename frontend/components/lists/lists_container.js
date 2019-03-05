import { connect } from 'react-redux';

import Lists from './lists';
import { fetchLists, deleteList } from '../../actions/list_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    const lists = state.entities.lists ? Object.values(state.entities.lists) : [];

    const listings = state.entities.listings ? Object.values(state.entities.listings) : [];

    return {
        currentUser: state.entities.users[state.session.currentUserId],
        lists,
        listings,
        loading: state.ui.loading.listsLoading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchLists: () => dispatch(fetchLists()),
        deleteList: listId => dispatch(deleteList(listId)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Lists);