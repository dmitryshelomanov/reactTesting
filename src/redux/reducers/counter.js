import { COUNTER_MINES, COUNTER_PLUS } from '../types'


export const INITIAL_STATE = {
  number: 0
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COUNTER_PLUS: return {
      ...state,
      number: action.payload
    }
    case COUNTER_MINES: return {
      ...state,
      number: action.payload
    } 
    default: return state
  }
}
