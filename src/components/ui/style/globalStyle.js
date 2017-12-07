import { injectGlobal } from 'styled-components'

export default () => injectGlobal`
  body {
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
    background: #353748
  }
  #root {
    width: 100%;
    height: 100%
  }
`