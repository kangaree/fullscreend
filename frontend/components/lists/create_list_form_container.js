import { connect } from 'react-redux';
import { createList } from '../../actions/list_actions';
import ListForm from './list_form';

const mapStateToProps = state => {

    return {
        currentUserId: state.ui.currentUserId,
    }
};

const mapDispatchtoProps = dispatch => ({
    processListForm: (list) => dispatch(createList(list)),
});

export default connect(mapStateToProps, mapDispatchtoProps)(ListForm);