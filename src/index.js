import React from 'react'
import ReactDOM from 'react-dom'
import { Route, HashRouter } from 'react-router-dom'
import './index.scss'
import App from './_containers/App'

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path='/' component={App} />
    </div>
  </HashRouter>,
  document.getElementById('root'))
