import merge from 'lodash/merge';

import {
    RECEIVE_LIST,
    RECEIVE_LISTS,
    REMOVE_LIST
} from '../actions/list_actions';

const listsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_LIST:
            return merge({}, state, { [action.list.list.id]: action.list.list });
            
        case RECEIVE_LISTS:
            return merge({}, state, action.lists.lists);

        case REMOVE_LIST:
            let newState = merge({}, state);
            delete newState[action.listId];
            return newState;

        default:
            return state;
    };
};

export default listsReducer;
