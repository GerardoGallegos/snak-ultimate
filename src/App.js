import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import SnakPage from './pages/Snak'
import SnaksPage from './pages/Snaks'
import Navbar from './components/Navbar'

import './global.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Navbar />
          <Route path='/' exact component={HomePage} />
          <Route path='/snaks' component={SnaksPage} />
          <Route path='/snak/:id' component={SnakPage} />
        </div>
      </Router>
    )
  }
}

export default App
