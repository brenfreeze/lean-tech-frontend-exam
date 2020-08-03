import {
  OPEN_DIALOG,
  CLOSE_DIALOG
} from './actionTypes'

const initialState = {
  dialog: {
    isOpen: false,
    title: '',
    message: '',
    onConfirmClick: null,
    onCancelClick: null
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_DIALOG:
      return {
        ...state,
        dialog: {
          isOpen: true,
          ...action.payload
        }
      }
    case CLOSE_DIALOG:
      return initialState
    default:
      return state
  }
}

export default reducer