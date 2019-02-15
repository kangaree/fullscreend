export const fetchLists = () => (
    $.ajax({
        method: 'GET',
        url: 'api/lists'
    })
);

export const fetchList = id => (
    $.ajax({
        method: 'GET',
        url: `api/lists/${id}`
    })
);

export const createList = list => (
    $.ajax({
        method: 'POST',
        url: 'api/lists',
        data: { list }
    })
);

export const updateList = list => (
    $.ajax({
        method: 'PUT',
        url: `api/lists/${list.id}`,
        data: { list }
    })
);

export const deleteList = id => (
    $.ajax({
        method: 'DELETE',
        url: `api/lists/${id}`
    })
);

export const fetchListing = id => (
    $.ajax({
        method: 'GET',
        url: `api/listings/${id}`
    })
);

export const createListing = listing => (
    $.ajax({
        method: 'POST',
        url: 'api/listings',
        data: { listing }
    })
);

export const updateListing = listing => (
    $.ajax({
        method: 'PUT',
        url: `api/listings/${listing.id}`,
        data: { listing }
    })
);

export const deleteListing = id => (
    $.ajax({
        method: 'DELETE',
        url: `api/listings/${id}`
    })
);

export const fetchUserLists = userId => (
    $.ajax({
        method: 'GET',
        url: `api/users/${userId}/lists`
    })
);