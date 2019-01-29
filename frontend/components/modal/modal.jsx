import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginContainer from '../session/login_container';
import SignupContainer from '../session/signup_container';
import ReviewFormContainer from '../shows_show/review_form_container';

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            component = <LoginContainer />;
            break;
        case 'signup':
            component = <SignupContainer />;
            break;
        case 'review':
            component = <ReviewFormContainer />;
            break;
        default:
            return null;
    }
    return (
        <div className={modal === "login" ? "modal-background-login" : "modal-background"} onClick={closeModal}>
            <div className={modal === "login" ? "modal-child-login" : "modal-child"} onClick={e => e.stopPropagation()}>
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
