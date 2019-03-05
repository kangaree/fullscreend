import {
    RECEIVE_SHOW,
    START_LOADING_SINGLE_SHOW,
    RECEIVE_REVIEWS,
    START_LOADING_REVIEWS,
} from '../actions/show_actions';

import {
    RECEIVE_LISTS,
    START_LOADING_LISTS,
    RECEIVE_LIST,
    START_LOADING_SINGLE_LIST,
} from '../actions/list_actions';

const initialState = {
    detailLoading: false,
    reviewsLoading: false,
    listsLoading: false,
    listLoading: false,
};

const loadingReducer = (state = initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SHOW:
            return Object.assign({}, state, { detailLoading: false });
        case START_LOADING_SINGLE_SHOW:
            return Object.assign({}, state, { detailLoading: true });
        case RECEIVE_REVIEWS:
            return Object.assign({}, state, { reviewsLoading: false });
        case START_LOADING_REVIEWS:
            return Object.assign({}, state, { reviewsLoading: true });
        case RECEIVE_LISTS:
            return Object.assign({}, state, { listsLoading: false });
        case START_LOADING_LISTS:
            return Object.assign({}, state, { listsLoading: true });
        case RECEIVE_LIST:
            return Object.assign({}, state, { listLoading: false });
        case START_LOADING_SINGLE_LIST:
            return Object.assign({}, state, { listLoading: true });
        default:
            return state;
    }
};

export default loadingReducer;