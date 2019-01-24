import {
    postUser,
    postSession,
    deleteSession,
} from '../utils/session_api_utils';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user,
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors,
});


// What's wrong with the below?
// export const createNewUser = formUser => dispatch => postUser(formUser)
//     .then(user => dispatch(receiveCurrentUser(user), e => dispatch(receiveErrors(e.responseJSON))));

export const createNewUser = formUser => dispatch => postUser(formUser)
    .then(user => {
        return dispatch(receiveCurrentUser(user));
    }, e => {
        return dispatch(receiveErrors(e.responseJSON));
    });

export const login = formUser => dispatch => postSession(formUser)
    .then(user => {
        return dispatch(receiveCurrentUser(user));
    }, e => { 
        return dispatch(receiveErrors(e.responseJSON));
    });

export const logout = () => dispatch => deleteSession()
    .then(() => dispatch(logoutCurrentUser()));