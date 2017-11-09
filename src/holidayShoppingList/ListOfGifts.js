import React from 'react'

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

export default ListOfGifts
