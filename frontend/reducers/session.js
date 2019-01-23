import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session';

// what we return if we don't have a user
const _nullSession = {
    currentUserId: null,
}

export default (state = _nullSession, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { currentUserId: action.user.id });
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
}; 