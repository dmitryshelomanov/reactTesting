import styled from 'styled-components'
import PropTypes from 'prop-types'


const FlexWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: ${props => props.jc};
  align-items: ${props => props.ai};
`

export default FlexWrap

FlexWrap.propTypes = {
  jc: PropTypes.string.isRequired,
  ai: PropTypes.string.isRequired
}

FlexWrap.defaultProps = {
  jc: 'center',
  ai: 'center'
}
