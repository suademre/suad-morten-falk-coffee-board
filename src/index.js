import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import data from './data.json'
import GlobalStyles from './GlobalStyles'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App data={data} />
  </React.StrictMode>,
  document.getElementById('root')
)
