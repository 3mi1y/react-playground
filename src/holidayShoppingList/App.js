import React from 'react'
import Header from './Header'
import ListContainer from './ListContainer'

const styles = {
  main: {
    fontFamily: 'Spectral SC'
  }
}

const App = () => {
  return (
    <div styles={styles.main}>
      <Header
        title='Holiday Shopping List App'
        subheader='A handy tool to use for gift shopping'
      />
      <ListContainer />
    </div>
  )
}

export default App
