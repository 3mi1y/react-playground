import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  header: {
    fontFamily: 'Spectral SC',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'spaceBetween',
    alignItems: 'center'
  }
}

const Header = ({title, subheader}) => {
  return (
    <div style={styles.header}>
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
