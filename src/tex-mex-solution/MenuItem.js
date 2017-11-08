import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  item: {
    width: '40%',
    margin: 10,
    border: 'solid 3px black',
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  img: {
    maxWidth: '90%'
  },
  mild: {
    color: 'orange'
  },
  medium: {
    color: 'red'
  },
  hot: {
    color: 'blue'
  }
}

const MenuItemDisplay = ({name, price, category, spiceLevel, img}) => {
  const spiceColor = spiceLevel < 4 ? {color: 'black'}
    : spiceLevel >= 4 && spiceLevel < 7
      ? {color: 'orange'}
      : {color: 'red'}
  return (
    <div style={styles.item}>
      <h4 style={spiceColor}>{name} ${price}</h4>
      <h4>{category}</h4>
      <h4>{spiceLevel}</h4>
      <img style={styles.img} src={img} />
    </div>
  )
}

MenuItemDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  spiceLevel: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired

}

export default MenuItemDisplay
