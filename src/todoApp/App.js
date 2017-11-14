import React from 'react'
import Header from './Header'
import ToDoContainer from './ToDoContainer'

const styles = {
  container: {
    backgroundColor: '#3498db',
    height: '100vh',
    width: '100vh',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}

const App = () =>
  <div style={styles.container}>
    <Header />
    <ToDoContainer />
  </div>

export default App
