import {
  GET_PROGRAMS
} from '../actionTypes'

export const getPrograms = (programsObj) => {
  return {
    type: GET_PROGRAMS,
    payload: {
      programs: programsObj
    }
  }
}