import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUserId: window.currentUser.id
            },
            entities: {
                users: { [currentUser.id]: currentUser },
                search_shows: []
            },
        };
    }
    const store = createStore(preloadedState);
    // const store = createStore();

    ReactDOM.render(<Root store={store} />, root);

    window.getState = store.getState;
    window.dispatch = store.dispatch;

})