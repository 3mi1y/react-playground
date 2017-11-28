import React from 'react'
import Classes from './Classes'
import Products from './Products'
import classData from './ClassData'
import productData from './ProductData'
import NavBar from './NavBar'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Home = () =>
  <div>
    <h2>Welcome to our Knitting Shop!</h2>
    <p>We offer classes to teach you how to knit as well as sell a nice variety of yarns from all over the world!</p>
  </div>

const App = () =>
  <Router>
    <div>
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route exact path='/classes' render={() => <Classes classData={classData} />} />
      <Route exact path='/products' render={() => <Products productData={productData} />} />
    </div>
  </Router>

export default App