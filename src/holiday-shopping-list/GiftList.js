import React from 'react'
import PropTypes from 'prop-types'

const GiftList = ({ gifts }) =>
  <div>
    <h4> Display List Of Gifts! </h4>
  </div>

GiftList.propTypes = {
  gifts: PropTypes.array.isRequired
}

export default GiftList
