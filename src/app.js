import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import Counter from './components/counter'
import globalStyle from '../src/components/ui/style/globalStyle'

import store from './helpers/createStore'

const theme = {}

globalStyle()

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Counter />  
      </ThemeProvider>
    </Provider>
  )
}

export default App
