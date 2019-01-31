import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginContainer from '../session/login_container';
import SignupContainer from '../session/signup_container';
import CreateReviewFormContainer from '../shows_show/create_review_form_container';
import EditReviewFormContainer from '../shows_show/edit_review_form_container';
import { networkInterfaces } from 'os';

// modal is a string now, but will be an object with type and options keys
function Modal({ modal, closeModal }) {

    if (!modal) {
        return null;
    }

    let component;
    switch (modal.modal_type) {
        case 'login':
            component = <LoginContainer />;
            break;
        case 'signup':
            component = <SignupContainer />;
            break;
        case 'review':
            component = <CreateReviewFormContainer />;
            break;
        case 'edit-review':
            component = <EditReviewFormContainer review={modal.options.review}/>;
            break;
        default:
            return null;
    }

    return (
        <div className={modal.modal_type === "login" ? "modal-background-login" : "modal-background"} onClick={closeModal}>
            <div className={modal.modal_type === "login" ? "modal-child-login" : "modal-child"} onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {

    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
