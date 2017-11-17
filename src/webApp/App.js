import React from 'react'
import './index.css'
import Jumbotron from './Jumbotron'
import NavigationBar from './NavigationBar'
import Products from './Products'
import About from './About'

const someCandies = [
  {
    name: 'Pumpkin Spice Mints',
    img: 'http://www.confessionsofacookbookqueen.com/wp-content/uploads/2013/10/IMG_6334-2.jpg',
    price: 12
  },
  {
    name: 'Decadent Pumpkin Milk Chocolate',
    img: 'http://www.thenibble.com/marketplace/draft-1/images/dcpumpkin1230.jpg',
    price: 20
  }
]
const App = () => {
  return (
    <div className='container-fluid'>
      <NavigationBar />
      <Jumbotron title='Haloween is a Great Holiday' />
      <div className='content-section'>
        <About />
        <Products title='Our Candies' candies={someCandies} />
      </div>
    </div>
  )
}

export default App
