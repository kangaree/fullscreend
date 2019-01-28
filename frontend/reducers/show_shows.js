import merge from 'lodash/merge';

import {
    RECEIVE_SHOW
} from '../actions/show_actions';

const showReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_SHOW:
            // debugger
            return action.show
        default:
            return state;
    }
};

export default showReducer;