import React from 'react'
import Navbar from './Navbar'
import Stories from './Stories'
import {HashRouter, Route } from 'react-router-dom'

export default class Main extends React.Component {
  render () {
    return (
      <HashRouter>
        <div id='main'>
          <div className='column container'>
            <div id='header'>
              <h1>Readium</h1>
            </div>
            <Navbar />
          </div>
          <Route path='/stories' component={Stories}/>
        </div>
      </HashRouter>
    )
  }
}
