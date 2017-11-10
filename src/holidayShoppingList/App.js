import React from 'react'
import Header from './Header'
import ListContainer from './ListContainer'

const App = () => {
  return (
    <div>
      <Header
        title='Holiday Shopping List App'
        subheader='A handy tool to use for gift shopping'
      />
      <ListContainer />
    </div>
  )
}

export default App
