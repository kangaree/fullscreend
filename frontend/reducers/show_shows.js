import merge from 'lodash/merge';

import {
    RECEIVE_SHOW
} from '../actions/show_actions';

const showReducer = (state = null, action) => {
    switch (action.type) {
        case RECEIVE_SHOW:
            return action.show.id;
        default:
            return state;
    }
};

export default showReducer;