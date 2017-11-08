import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem'

const styles = {
  menuContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
}

const MenuList = ({ foodItems }) => {
  return (
    <div style={styles.menuContainer}>

      {
        foodItems.map(food => {
          return <MenuItem
            name={food.name}
            price={food.price}
            category={food.category}
            spiceLevel={food.spiceLevel}
            img={food.img}

          />
        })
      }

    </div>

  )
}

MenuList.propTypes = {
  foodItems: PropTypes.array.isRequired
}

export default MenuList
