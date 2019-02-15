import { RECEIVE_LISTS } from '../actions/list_actions';
import merge from 'lodash/merge';

const currentListsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_LISTS:
            return Object.keys(action.lists.lists).map(
                listId => parseInt(listId)
            );
        default:
            return state;
    }
};

export default currentListsReducer;