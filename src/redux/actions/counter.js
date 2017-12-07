import { COUNTER_MINES, COUNTER_PLUS } from '../types'


export const plus = (num) => (dispatch) => {
  return dispatch({
    payload: num,
    type: COUNTER_PLUS,
  })
}

export const mines = (num) => (dispatch) => {
  return dispatch({
    payload: num,
    type: COUNTER_MINES,
  })
}

