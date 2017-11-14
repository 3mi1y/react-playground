import React, {Component} from 'react'
import GiftList from './GiftList'

class ListContainer extends Component {
  state = {
    gifts: undefined
  }
  componentDidMount () {
    const giftArray = [{name: 'Apple TV', price: 300}, {name: 'candy', price: 3}]
    this.setState({ gifts: giftArray })
  }
  render () {
    return (
      <div>
        <h4> Made it to the list! </h4>
        {
          this.state.gifts
            ? <GiftList gifts={this.state.gifts} />
            : <h1> No Gifts Yet </h1>
        }
      </div>
    )
  }
}

export default ListContainer
