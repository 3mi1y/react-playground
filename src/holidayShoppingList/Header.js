import React from 'react'
import PropTypes from 'prop-types'

const Header = ({title, subheader}) => {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{subheader}</h3>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subheader: PropTypes.string.isRequired
}

export default Header
