import React, { Component } from 'react'

// import classes from './App.scss'
// import Aux from '../_hoc/Auxiliary'
// import wrapWithClass from '../_hoc/wrapWithClass'

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
      // <Aux>
      <h1>Default project setup works!</h1>
      // </Aux>
    )
  }
}

export default App
// export default wrapWithClass(App, classes.headerSuccess)
