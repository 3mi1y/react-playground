import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import NavigationBar from './NavigationBar'
import About from './About'

const Person = ({match}) =>
  <div>
    <h3> {match.params.name} </h3>
  </div>

const App = () =>
  <Router>
    <div>
      <NavigationBar />
      <Route exact path='/' render={() => <div>Home</div>} />
      <Route path='/about' component={About} />
      <Route path='/topics' render={() => <div>Topics</div>} />
      <Route path='/person/:name' component={Person} />
    </div>
  </Router>

export default App
