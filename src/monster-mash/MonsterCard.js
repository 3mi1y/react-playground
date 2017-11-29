import React from 'react'

const MonsterCard = ({ monster }) => {
  return (
    <div className='monsterCard'>
      <h1>{ monster.name }</h1>
      {
        monster.diet.map((food) => {
          return <p>{ food }</p>
        })
      }
      <img src={ monster.img } />
    </div>
  )
}

export default MonsterCard
