import React from 'react'
import ReactDOM from 'react-dom'
import { Route, HashRouter } from 'react-router-dom'
import './index.scss'
import App from './containers/App'
import axios from 'axios'

// Set up axios default configuration
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

// https://github.com/axios/axios#interceptors
axios.interceptors.request.use(request => {
  console.log('axios interceptors request: ', request)
  // Edit request config
  return request
}, error => {
  // request error handling, like loss of internet connection, server problems..
  console.log('axios interceptors error: ', error)
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  console.log('axios interceptors response: ', response)
  // Edit response config
  return response
}, error => {
  // request error handling, like loss of internet connection, server problems..
  console.log('axios interceptors error: ', error)
  return Promise.reject(error)
})

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path='/' component={App} />
    </div>
  </HashRouter>,
  document.getElementById('root'))
