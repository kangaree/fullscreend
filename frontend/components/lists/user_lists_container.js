import { connect } from 'react-redux';

import UserLists from './user_lists';
import { fetchUserLists } from '../../actions/list_actions';

const mapStateToProps = (state) => {
    const lists = state.entities.lists ? Object.values(state.entities.lists) : [];

    const listings = state.entities.listings ? Object.values(state.entities.listings) : [];

    return {
        currentUserId: parseInt(state.session.currentUserId),
        lists,
        listings,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserLists: (userId) => dispatch(fetchUserLists(userId)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserLists);