import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  formContainer: {
    width: '50%',
    border: '1px dotted red',
    fontFamily: 'Spectral SC',
    backgroundColor: '#cecece',
    paddingTop: '3%',
    paddingBottom: '3%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  header: { 
    letterSpacing: '5px',
    fontSize: '20px'
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1%'
  }
}

const GiftForm = ({ addGift, recipientNameChange, giftNameChange, giftPriceChange, giftImageChange }) => {
  return (
    <form onSubmit={addGift} style={styles.formContainer}>
      <h1 style={styles.header}>Add Another Gift</h1>
      <div style={styles.inputContainer}>
        <label>Enter the gift recipient</label>
        <input type='text' placeholder='Recipient Name' onChange={recipientNameChange} />
      </div>

      <div style={styles.inputContainer}>
        <label>Enter the name of the gift:</label>
        <input type='text' placeholder='Gift name' onChange={giftNameChange} />
      </div>

      <div style={styles.inputContainer}>
        <label>Enter the gift price:</label>
        <input type='number' placeholder='$5.00' onChange={giftPriceChange} />
      </div>

      <div style={styles.inputContainer}>
        <label>Enter an image URL for your gift:</label>
        <input type='text' onChange={giftImageChange} />
      </div>

      <button type='submit'>Submit</button>
    </form>
  )
}

GiftForm.propTypes = {
  addGift: PropTypes.func.isRequired,
  recipientNameChange: PropTypes.func.isRequired,
  giftNameChange: PropTypes.func.isRequired,
  giftPriceChange: PropTypes.func.isRequired,
  giftImageChange: PropTypes.func.isRequired
}

export default GiftForm
