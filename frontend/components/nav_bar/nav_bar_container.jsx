import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
  currentUser: state.entities.users[state.session.currentUserId]
}};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))
});


// Comment this out when you have built the login functionality
// const mapStateToProps = null;
// const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
