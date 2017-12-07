import React from 'react'
import { shallow, render, configure, mount } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { plus, mines } from '../../redux/actions/counter'

import { Counter } from './index'
import Actionbtn from '../ui/actionBtn'
import { COUNTER_PLUS, COUNTER_MINES } from '../../redux/types'

configure({ adapter: new Adapter() })

describe('test component Counter', () => {

  it('counter render without crash', () => {
    render(<Counter />)
  })

  it('dispatches plus action', () => {
    const testFn = sinon.stub()
    const wrapper = shallow(
      <Counter
        onIncCounter={() => plus(1)(testFn)}
      />
    )
    wrapper.find(Actionbtn).at(0).simulate('click')
    expect(
      testFn.calledWith({ payload: 1, type: COUNTER_PLUS })
    ).toBeTruthy()
  })

  it('dispatches mines action', () => {
    const testFn = sinon.stub()
    const wrapper = shallow(
      <Counter
        onDeincCounter={() => mines(100)(testFn)}
      />
    )
    wrapper.find(Actionbtn).at(1).simulate('click')
    expect(
      testFn.calledWith({ payload: 100, type: COUNTER_MINES })
    ).toBeTruthy()
  })

  it('shapshot Counter', () => {
    const tree = renderer
      .create(<Counter />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})