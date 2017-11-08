import React from 'react'
import data from './Data'
import RestaurantInfo from './RestaurantInfo'
import MenuContainer from './MenuContainer'

const styles = {
  appContainer: {
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}

const TexMexApp = () => {
  return (
    <div style={styles.appContainer}>
      <RestaurantInfo
        name={data.company[0].title}
        address={data.address.street}
        phone={data.phone}

      />
      <MenuContainer />
    </div>
  )
}
export default TexMexApp
