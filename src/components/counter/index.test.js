import React from 'react'
import { shallow, render, configure } from 'enzyme'
import { stub } from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';
import { Counter } from './index'
import Actionbtn from '../ui/actionBtn'


configure({ adapter: new Adapter() })

describe('test component Counter', () => {

  it('counter render without crash', () => {
    render(<Counter />)
  })

  it('dispatches plus action', () => {
    const testFn = stub()
    const wrapper = shallow(
      <Counter
        onIncCounter={testFn}
      />
    )

    wrapper.find(Actionbtn).at(0).simulate('click')
    expect(testFn.called).toBeTruthy()
  })

  it('dispatches mines action', () => {
    const testFn = stub()
    const wrapper = shallow(
      <Counter
        onDeincCounter={testFn}
      />
    )

    wrapper.find(Actionbtn).at(1).simulate('click')
    expect(testFn.called).toBeTruthy()
  })

  it('shapshot Counter', () => {
    const tree = renderer
      .create(<Counter />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
