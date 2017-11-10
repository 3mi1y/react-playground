import React from 'react'
import PropTypes from 'prop-types'
import Gift from './Gift'

const ListOfGifts = ({ shoppingList }) => {
  return (
    <div>
      {
        shoppingList.map((item) => {
          return (
            <Gift item={item} />
          )
        })
      }
    </div>
  )
}

ListOfGifts.propTypes = {
  shoppingList: PropTypes.func.isRequired
}

export default ListOfGifts
