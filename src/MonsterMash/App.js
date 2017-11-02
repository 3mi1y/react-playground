import React from 'react'
import Jumbotron from './Jumbotron'
import MonsterSection from './MonsterSection'
import './styles.css'

function Monster (name, diet, img) {
  this.name = name
  this.diet = diet
  this.img = img
}

const monsters = []

const humphrey = new Monster('Humphrey', ['Apples', 'Pumpkin Pie', 'Wine'], 'http://daviscreative.com/wp-content/uploads/2017/06/15695647_l-300x300.jpg')
const freddy = new Monster('Freddy', ['Trick or Treaters', 'Candy'], 'https://i.pinimg.com/736x/b2/53/36/b25336fe10b2e2fbb709889f9b3e74c1--cartoon-monsters-cute-monsters.jpg')
const jack = new Monster('Jack', ['Jack O lanters', 'mail'], 'https://thecrampedcreative.com/wp-content/uploads/2015/07/iStock_000021692588Medium.jpg')

monsters.push(humphrey)
monsters.push(freddy)
monsters.push(jack)

const MonsterApp = () => {
  return (
    <div className='myMain'>
      <Jumbotron title='Monster Mash' />
      <MonsterSection arr={monsters} />
    </div>
  )
}

export default MonsterApp
