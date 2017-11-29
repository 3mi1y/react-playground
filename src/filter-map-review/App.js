import React from 'react'
import DATA from './DATA'

// There are four little challenges that build on the warmup exercises
// If they are really struggling we can add some easier map and filter challenges
// in the beginning like.
const App = () => {
  return (
    <div>
      <div>
        <h1>React Challenge One - All Class Info</h1>
        {
          // React Challenge One - 
          // filter or map through all of the items and display their info
          DATA.map(item => {
            return (
              <div>
                <h4>{item.name}</h4>
                <p>Price: {item.cost}</p>
                <p>Instructor: {item.instructor}</p>
                <p>Location: {item.location}</p>
              </div>
            )
          })

        }
      </div>

      <div>
        <h1>React Challenge Two - Free Classes</h1>
        {
          // React Challenge Two -
          // filter and map through all of the items and display the free classes
          DATA.filter(item => {
            return item.cost === 0
          }).map(item => {
            return <h3>{item.name}</h3>
          })
        }
      </div>

      <div>
        <h1>React Challenge Three - Show Classes That are Only One Hour</h1>
        {
          // React Challenge Three -
          // filter and map through the classes that are only one hour long
          DATA.filter(item => {
            return item.length === 1
          }).map(item => {
            return <h3>{item.name}</h3>
          })
        }
      </div>

      <div>
        <h1>React Challenge Four - Classes Taught by Professors</h1>
        {
          // React Challenge Three -
          // display the classes that are taught by professors (may need to review the split() method)
          DATA.filter(item => {
            return item.instructor.split(' ')[0] === 'Professor'
          }).map(item => {
            return (
              <div>
                <h4>{item.name}</h4>
                <p>{item.professor}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
