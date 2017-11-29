import React from 'react'
import MonsterCard from './MonsterCard'

const MonsterSection = ({ arr }) => {
  return (
    <div className='myMain'>
      {
        arr.filter((monster) => {
          // return only the monsters that start with the letter 'H'
          return monster.name[0] === 'H'
        }).map((monster) => {
          return <MonsterCard monster={monster} />
        })
      }
    </div>
  )
}

export default MonsterSection
