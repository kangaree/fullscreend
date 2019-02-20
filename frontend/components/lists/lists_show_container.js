import { connect } from 'react-redux';

import ListsShow from'./lists_show';
import { fetchList } from '../../actions/list_actions';

const mapStateToProps = (state) => {

    const list = state.entities.lists ? state.entities.lists[state.ui.lists_show] : [];

    return {
        list,
    }
}

const mapDispatchToProps = dispatch => ({
    fetchList: id => dispatch(fetchList(id)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListsShow);