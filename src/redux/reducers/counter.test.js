import sinon from 'sinon'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import counter, { INITIAL_STATE } from './counter'
import * as types from '../types'
import { plus, mines } from '../actions/counter'

beforeEach(() => { 
  const mw = [thunk]
  global.mockStore = configureStore(mw)
})

describe('counter testing', () => {

  it('counter default state', () => {
    const initialState = INITIAL_STATE
    const actions = {}
    expect(counter(initialState, actions)).toEqual(initialState)
  })

  it('counter COUNTER_PLUS state', () => {
    const store = global.mockStore({})
    store.dispatch(plus(1))
    expect(store.getActions()[0]).toEqual({
      type: types.COUNTER_PLUS,
      payload: 1
    })
  })

  it('counter COUNTER_MINES state', () => {
    const store = global.mockStore({})
    store.dispatch(mines(1))
    expect(store.getActions()[0]).toEqual({
      type: types.COUNTER_MINES,
      payload: 1
    })
  })
})