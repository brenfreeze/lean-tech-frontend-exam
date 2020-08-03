import {
  GET_PROGRAMS,
  DELETE_PROGRAM
} from './actionTypes'

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
    case DELETE_PROGRAM:
      const newPrograms = state.programs.filter(program => program.id !== action.payload.programId)

      return {
        ...state,
        programs: newPrograms
      }
    default: {
      return state
    }
  }
}

export default reducer