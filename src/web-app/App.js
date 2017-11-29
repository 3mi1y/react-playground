import React from 'react'
import Faker from 'faker'
import './index.css'
import Jumbotron from './Jumbotron'

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
        <Products title='Our Candies' candies={someCandies} />
        <About />
      </div>
    </div>
  )
}

const NavigationBar = () => {
  return (
    <nav className='myNav'>
      <li><a className='fa fa-home'>Home</a></li>
      <li><a>About</a></li>
      <li><a>Products</a></li>
      <li><a>Contact</a></li>
    </nav>
  )
}

const About = () => {
  return (
    <div className='about'>
      <h2>Why we love haloween</h2>
      <p>Because we love candy. More importanly, because we make candy - chocolate candy. Learn more about our chocolate shoppe and how we can cater your Haloween with custom chocolates.</p>
    </div>
  )
}
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
const CandyCard = (props) => {
  return (
    <div className='candy-card'>
      <h3>{ props.candy.name }</h3>
      <img src={ props.candy.img } />
      <button>Learn more</button>
    </div>
  )
}

export default App
