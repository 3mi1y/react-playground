import React from 'react'
import {Link} from 'react-router-dom'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
}

const NavBar = () =>
  <nav style={styles.container}>
    <Link to='/'>Home</Link>
    <Link to='/classes'>Classes</Link>
    <Link to='/products'>Products</Link>
  </nav>

export default NavBar
