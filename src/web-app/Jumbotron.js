import React from 'react'
import PropTypes from 'prop-types'

const Jumbotron = ({ title }) => {
  return (
    <div className='jumbotron jumbo'>
      <h3>{ title }</h3>
    </div>
  )
}

Jumbotron.propTypes = {
  title: PropTypes.string.isRequired
}

export default Jumbotron
