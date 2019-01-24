import React from 'react';
import { connect } from 'react-redux';
import Footer from './footer';

// Comment this back in after you have built the login functionality

import { logout } from '../../actions/session';


// Comment this out when you have built the login functionality
// const mapStateToProps = null;
// const mapDispatchToProps = null;

export default connect(null, null)(Footer);
