import React from 'react'
import PropTypes from 'prop-types'

const ListOfGifts = ({ shoppingList }) => {
  return (
    <div>
      {
        shoppingList.map((item) => {
          return (
            <div>
              <h3>Recipient: {item.recipientName}</h3>
              <h5>Gift: {item.giftName}</h5>
              <img src={item.giftImage} />
              <p>Price: ${item.giftPrice}</p>
            </div>
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
