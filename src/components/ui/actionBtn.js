import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const btn = ({ className, text, ...rest }) => (
  <div className={className} {...rest}>
    {text}
  </div>
)

const ActionBtn = styled(btn)`
  display: flex;
  padding: 10px;
  background: #de8b6b;
  color: #fff;
  font-weight: bold;
  font-family: 'Roboto';
  cursor: pointer;
`

export default ActionBtn
