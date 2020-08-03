import {
  GET_PROGRAMS
} from '../actionTypes'

const initialState = {
  programs: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROGRAMS:
      return {
        ...state,
        programs: action.payload.programs
      }
    default: {
      return state
    }
  }
}

export default reducer