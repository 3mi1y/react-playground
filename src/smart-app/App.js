import React, {Component} from 'react'

// const SmartApp = () => {
//   return (
//     <div>
//       <h1>Hello from smartapp</h1>
//     </div>
//   )
// }
const Counter = ({count}) => {
  return (
    <div>
      <p>Count: {count}</p>
    </div>
  )
}

class SmartApp extends Component {
  state = {
    count: 10
  }

  sayHello = () => {
    alert('Thanks for clicking alert')
  }

  increaseCount = () => {
    this.setState({ count: this.state.count += 1 })
  }

  decreaseCount = () => {
    this.setState({ count: this.state.count -= 1 })
  }

  render () {
    return (
      <div>
        <Counter count={this.state.count} />
        <h3>Hello, from smart app!</h3>
        <p>Number: { this.state.count }</p>
        <button onClick={this.sayHello}>Say Hello</button>
        <button onClick={this.increaseCount}>Increase Count</button>
        <button onClick={this.decreaseCount}>Decrease Count</button>
      </div>
    )
  }
}

export default SmartApp