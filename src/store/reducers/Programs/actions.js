import {
  GET_PROGRAMS, DELETE_PROGRAM
} from './actionTypes'

export const getPrograms = (programsObj) => {
  return {
    type: GET_PROGRAMS,
    payload: {
      programs: programsObj
    }
  }
}

export const deleteProgram = (programId) => {
  return {
    type: DELETE_PROGRAM,
    payload: {
      programId
    }
  }
}