import merge from 'lodash/merge';

import {
    RECEIVE_LIST
} from '../actions/list_actions';

const listsShowReducer = (state = null, action) => {
    switch (action.type) {
        case RECEIVE_LIST:
            return action.list.list.id;
        default:
            return state;
    }
};

export default listsShowReducer;