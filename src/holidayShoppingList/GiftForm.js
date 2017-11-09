import React from 'react'

const GiftForm = ({ addGift, recipientNameChange, giftNameChange, giftPriceChange, giftImageChange }) => {
  return (
    <form onSubmit={addGift}>
      <div>
        <label>Enter the gift recipient</label>
        <input type='text' placeholder='Recipient Name' onChange={recipientNameChange} />
      </div>

      <div>
        <label>Enter the name of the gift:</label>
        <input type='text' placeholder='Gift name' onChange={giftNameChange} />
      </div>

      <div>
        <label>Enter the gift price:</label>
        <input type='number' placeholder='$5.00' onChange={giftPriceChange} />
      </div>

      <div>
        <label>Enter an image URL for your gift:</label>
        <input type='text' onChange={giftImageChange} />
      </div>

      <button type='submit'>Submit</button>
    </form>
  )
}

export default GiftForm
