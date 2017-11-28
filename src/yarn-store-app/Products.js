import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    width: '50%'
  },
  img: {
    maxWidth: '100%'
  }
}

const Products = ({productData}) => {
  return (
    <div>
      {
        productData.map(item => {
          return (
            <div style={styles.container}>
              <h1>{item.productName}</h1>
              <img src={item.img} style={styles.img} />
              <p>${item.price}</p>
            </div>
          )
        })
      }
    </div>
  )
}

Products.propTypes = {
  productData: PropTypes.array.isRequired
}

export default Products
