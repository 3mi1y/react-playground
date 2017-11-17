import React from 'react'

const CandyCard = (props) => {
  return (
    <div className='candy-card'>
      <h3>{ props.candy.name }</h3>
      <img src={props.candy.img} />
      <button>Learn more</button>
    </div>
  )
}

export default CandyCard
