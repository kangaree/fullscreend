import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { createNewUser } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import Signup from './signup';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
        // navLink: <Link to="/signup">sign up instead</Link>,
    };
};

const mapDispatchtoProps = dispatch => ({
    processSignupForm: (user) => dispatch(createNewUser(user)),
    closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchtoProps)(Signup);