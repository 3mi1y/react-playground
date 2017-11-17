import React from 'react'
import CandyCard from './CandyCard'

const Products = ({title, candies}) => {
  return (
    <div className='products'>
      <h2>{title}</h2>
      {
        candies.map((mycandy) => {
          return <CandyCard candy={mycandy} />
        })
      }
    </div>
  )
}

export default Products
