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
    return APIUtil.fetchLists()
        .then(lists => (dispatch(receiveLists(lists))))
};