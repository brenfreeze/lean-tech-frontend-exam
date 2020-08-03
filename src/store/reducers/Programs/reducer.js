import {
  GET_PROGRAMS,
  ADD_PROGRAM,
  DELETE_PROGRAM,
  UPDATE_PROGRAM
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
    case ADD_PROGRAM:
      return {
        ...state,
        programs: [
          ...state.programs,
          {
            ...action.payload.program
          }
        ]
      }
    case UPDATE_PROGRAM:
      const filteredPrograms = state.programs.filter(program => program.id !== action.payload.program.id)

      return {
        ...state,
        programs: [
          ...filteredPrograms,
          {
            ...action.payload.program
          }
        ]
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