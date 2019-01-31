import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

// export default function modalReducer(state = null, action) {
export default function modalReducer(state = {modal_type: null, options: {}}, action) {
  // debugger
  switch (action.type) {
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}