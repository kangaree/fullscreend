import { connect } from 'react-redux';

import { createReview } from '../../actions/show_actions';
import ReviewForm from './review_form';

import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    return {
        currentUser: state.entities.users[state.session.currentUserId]
    }
};

const mapDispatchToProps = dispatch => ({
    createReview: review => dispatch(createReview(review)),
    closeModal: () => dispatch(closeModal()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewForm);