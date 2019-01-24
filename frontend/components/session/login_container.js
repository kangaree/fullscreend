import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import Login from './login';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
        navLink: <Link to="/signup">sign up instead</Link>,
    };
};

const mapDispatchtoProps = dispatch => ({
    createNewUser: formUser => dispatch(login(formUser)),
});

export default connect(mapStateToProps, mapDispatchtoProps)(Login);