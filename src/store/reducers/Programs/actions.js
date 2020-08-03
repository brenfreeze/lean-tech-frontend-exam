import {
  GET_PROGRAMS,
  ADD_PROGRAM,
  DELETE_PROGRAM,
  UPDATE_PROGRAM,
} from './actionTypes'

export const getPrograms = (programsObj) => {
  return {
    type: GET_PROGRAMS,
    payload: {
      programs: programsObj
    }
  }
}

export const addProgram = (programObj) => {
  return {
    type: ADD_PROGRAM,
    payload: {
      program: programObj
    }
  }
}

export const updateProgram = (programObj) => {
  return {
    type: UPDATE_PROGRAM,
    payload: {
      program: programObj
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