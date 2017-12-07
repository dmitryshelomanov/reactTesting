import React from 'react'
import { shallow, render, configure, mount } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { plus, mines } from '../../redux/actions/counter'
import { Counter } from './index'
import Actionbtn from '../ui/actionBtn'
import * as types from '../../redux/types'

configure({ adapter: new Adapter() })

beforeEach(() => { 
  const mw = [thunk]
  global.mockStore = configureStore(mw)
})

describe('test component Counter', () => {

  it('counter render without crash', () => {
    render(<Counter />)
  })

  it('dispatches plus action', () => {
    const store = global.mockStore({})
    const wrapper = shallow(
      <Counter
        onIncCounter={() => store.dispatch(plus(1))}
      />
    )
    wrapper.find(Actionbtn).at(0).simulate('click')
    expect(store.getActions()[0]).toEqual({
      type: types.COUNTER_PLUS,
      payload: 1
    })
  })

  it('dispatches mines action', () => {
    const store = global.mockStore({})
    const wrapper = shallow(
      <Counter
        onDeincCounter={() => store.dispatch(mines(1))}
      />
    )
    wrapper.find(Actionbtn).at(1).simulate('click')
    expect(store.getActions()[0]).toEqual({
      type: types.COUNTER_MINES,
      payload: 1
    })
  })

  it.skip('shapshot Counter', () => {
    const tree = renderer
      .create(<Counter />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
