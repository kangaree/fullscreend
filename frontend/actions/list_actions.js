import * as APIUtil from '../utils/list_api_utils';

export const RECEIVE_LIST = 'RECEIVE_LIST';

export const receiveList = (list) => {
    return {
        type: RECEIVE_LIST,
        list,
    }
}

export const createList = list => dispatch => {
    return APIUtil.createList(list).then(list => (
        dispatch(receiveList(list))
    ))
};

export const REMOVE_LIST = "REMOVE_LIST"

export const fetchList = id => dispatch => {
    dispatch(startLoadingSingleList());
    return APIUtil.fetchList(id)
        .then(list => (dispatch(receiveList(list))))
};

export const updateList = list => dispatch => (
    APIUtil.updateList(list)
        .then(list => dispatch(receiveList(list)))
);

export const deleteList = listId => dispatch => {
    return APIUtil.deleteList(listId).then(list => dispatch(removeList(listId)))
};

const removeList = listId => ({
    type: REMOVE_LIST,
    listId
});

export const RECEIVE_LISTS = 'RECEIVE_LISTS';

export const receiveLists = lists => {
    return {
        type: RECEIVE_LISTS,
        lists
    }
};

export const fetchLists = () => dispatch => {
    dispatch(startLoadingLists());
    return APIUtil.fetchLists()
        .then(lists => (dispatch(receiveLists(lists))))
};

export const RECEIVE_LISTING = 'RECEIVE_LISTING';

export const receiveListing = (listing) => {
    return {
        type: RECEIVE_LISTING,
        listing,
    }
}

export const createListing = listing => dispatch => {
    return APIUtil.createListing(listing).then(listing => (
        dispatch(receiveListing(listing))
    ))
};

export const REMOVE_LISTING = "REMOVE_LISTING"

export const fetchListing = id => dispatch => {
    return APIUtil.fetchListing(id)
        .then(listing => (dispatch(receiveListing(listing))))
};

export const updateListing = listing => dispatch => (
    APIUtil.updateListing(listing)
        .then(listing => dispatch(receiveListing(listing)))
);

export const deleteListing = listingId => dispatch => {
    return APIUtil.deleteListing(listingId).then(listing => dispatch(removeListing(listingId)))
};

const removeListing = listingId => ({
    type: REMOVE_LISTING,
    listingId
});

export const fetchUserLists = (userId) => dispatch => {
    return APIUtil.fetchUserLists(userId)
        .then(lists => (dispatch(receiveLists(lists))))
};

export const START_LOADING_LISTS = 'START_LOADING_LISTS';
export const START_LOADING_SINGLE_LIST = 'START_LOADING_SINGLE_LIST';

export const startLoadingLists = () => ({
    type: START_LOADING_LISTS
});

export const startLoadingSingleList = () => ({
    type: START_LOADING_SINGLE_LIST
});