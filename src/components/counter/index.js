import React, { Component } from 'react'
import { connect } from 'react-redux'
import FlexWrap from '../ui/flexWrap'
import BlockNumber from '../ui/blockNumber'
import Actionbtn from '../ui/actionBtn'
import { plus, mines } from '../../redux/actions/counter'


export class Counter extends Component {
  render() {
    const { counter, onIncCounter, onDeincCounter } = this.props

    return (
      <FlexWrap>
        <Actionbtn
          text={"+"}  
          onClick={() => onIncCounter(1)}
        />
        <BlockNumber
          number={counter}
        />
        <Actionbtn
          text={"-"}
          onClick={() => onDeincCounter(2)}
        />
      </FlexWrap>
    )
  }
}

export default connect(
  state => ({
    counter: state.counter.number
  }),
  dispatch => ({
    onIncCounter: (num) => { 
      dispatch(plus(num))
    },
    onDeincCounter: (num) => { 
      dispatch(mines(num))
    }
  })
)(Counter)
