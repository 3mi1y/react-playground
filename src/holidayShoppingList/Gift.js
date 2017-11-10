import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  giftContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'spaceAround',
    alignItems: 'center',
    border: '1px dotted black'
  },
  image: {
    maxWidth: '50%'
  }
}

const Gift = ({item}) => {
  return (
    <div style={styles.giftContainer}>
      <h3>Recipient: {item.recipientName}</h3>
      <h5>Gift: {item.giftName}</h5>
      <img style={styles.image} src={item.giftImage} />
      <p>Price: ${item.giftPrice}</p>     
    </div>
  )
}

Gift.propTypes = {
  item: PropTypes.object.isRequired
}

export default Gift
