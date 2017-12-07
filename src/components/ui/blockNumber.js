import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const number = ({ className, number }) => (
  <div className={className}>
    {number}
  </div>
)

const BlockNumber = styled(number)`
  display: flex;
  padding: 15px;
  background: #e45252;
  color: #fff;
  font-weight: bold;
  font-family: 'Roboto';
  border-radius: 10px;
  margin: 0 20px
`

export default BlockNumber
