import {
  OPEN_DIALOG,
  CLOSE_DIALOG
} from './actionTypes'

export const openDialog = dialogObj => {
  return {
    type: OPEN_DIALOG,
    payload: dialogObj
  }
}

export const closeDialog = () => {
  return {
    type: CLOSE_DIALOG
  }
}