import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

// import classes from './App.scss'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  // ///////////////////////////////
  //  LIFECYCLE HOOKS (METHODS)  //
  // ///////////////////////////////

  // COMPONENT MOUNT

  componentWillMount () {
    console.log('[App.js] componentWillMount')
  }

  componentWillUnmount () {
    // Component is about to get removed => Perform any cleanup work here!
    console.log('[App.js] componentWillUnmount')
  }

  componentDidMount () {
    console.log('[App.js] componentDidMount')
  }

  // COMPONENT UPDATE

  componentWillReceiveProps (nextProps) {
    console.log('[App.js] componentWillReceiveProps', nextProps)
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate', nextProps, nextState)
    return true
  }

  componentWillUpdate () {
    console.log('[App.js] componentWillUpdate')
  }

  componentDidUpdate () {
    console.log('[App.js] componentDidUpdate')
  }

  // ////////////
  //  HANDLERS //
  // ////////////

  render () {
    console.log('[App.js] render')

    return (
      <BrowserRouter>
        <h1>Default project setup works!</h1>
      </BrowserRouter>
    )
  }
}

export default App
