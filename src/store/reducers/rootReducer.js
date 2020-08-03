import { combineReducers } from 'redux'

import ProgramsState from './Programs/reducer'
import UtilitiesState from './Utilities/reducer'

export default combineReducers({
  ProgramsState,
  UtilitiesState,
})