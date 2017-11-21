import React from 'react'
import DrinkCard from './DrinkCard'
import PropTypes from 'prop-types'

const DrinkList = ({drinkList}) => {
  return (
    <div>
      {
        drinkList.map((drink, index) => {
          return <DrinkCard drink={drink} key={index} />
        })
      }
    </div>
  )
}

DrinkList.propTypes = {
  drinkList: PropTypes.array.isRequired
}

export default DrinkList
