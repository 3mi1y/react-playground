import React, {Component} from 'react'
import data from './Data'
import RestaurantInfo from './RestaurantInfo'
import MenuContainer from './MenuContainer'

class TexMexApp extends Component {
  render () {
    return (
      <div>
        <RestaurantInfo
          name={data.company[0].title}
          address={data.address.street}
          phone={data.phone}

        />
        <MenuContainer />
      </div>
    )
  }
}

export default TexMexApp
