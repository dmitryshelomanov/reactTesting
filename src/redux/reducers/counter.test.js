import counter, { INITIAL_STATE } from './counter'
import sinon from 'sinon'
import { COUNTER_PLUS, COUNTER_MINES } from '../types'
import { plus, mines } from '../actions/counter'

describe('counter testing', () => {

  it('counter default state', () => {
    const initialState = INITIAL_STATE
    const actions = {}
    expect(counter(initialState, actions)).toEqual(initialState)
  })

  it('counter COUNTER_PLUS state', () => {
    const args = { type: COUNTER_PLUS, payload: 10 }
    const dispatch = sinon.stub().returns(args)
    const initialState = INITIAL_STATE
    const actions = plus(10)(dispatch)
    expect(dispatch.calledWith(args)).toBeTruthy()
    expect(counter(initialState, actions)).toEqual({
      number: 10
    })
  })

  it('counter COUNTER_MINES state', () => {
    const args = { type: COUNTER_MINES, payload: 1 }
    const dispatch = sinon.stub().returns(args)
    const initialState = INITIAL_STATE
    const actions = mines(1)(dispatch)
    expect(dispatch.calledWith(args)).toBeTruthy()
    expect(counter(initialState, actions)).toEqual({
      number: 1
    })
  })
})