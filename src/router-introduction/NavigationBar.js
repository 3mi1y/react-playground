import React from 'react'
import {Link} from 'react-router-dom'

const NavigationBar = () =>
  <nav>
    <Link to='/'> Home </Link>
    <Link to='/about'> About </Link>
    <Link to='/topics'> Topics </Link>
  </nav>

export default NavigationBar
