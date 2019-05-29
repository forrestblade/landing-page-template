import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './application'
import 'tachyons'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

module.hot.accept()
