import React, {Component} from 'react'
import GiftForm from './GiftForm'
import ListOfGifts from './ListOfGifts'

class ListContainer extends Component {
  state = {
    recipientName: '',
    giftName: '',
    giftPrice: 0,
    giftImage: '',
    shoppingList: [],
    totalPriceOfList: 0,
    budget: 5 // default budget value
  }

  recipientNameChange = (e) => this.setState({ recipientName: e.target.value })
  giftNameChange = (e) => this.setState({ giftName: e.target.value })
  giftPriceChange = (e) => this.setState({ giftPrice: e.target.value })
  giftImageChange = (e) => this.setState({ giftImage: e.target.value })
  updateShoppingList = (arr) => this.setState({ shoppingList: arr })

  componentDidMount () {
    this.getTotalPrice()
  }
  
  getTotalPrice = () => {
    let totalPrice = 0
    let list = this.state.shoppingList

    for (let i = 0; i < list.length; i += 1) { // doesn't hurt to brush up on the for loops
      totalPrice += Number(list[i].giftPrice)
    }
    this.setState({ totalPriceOfList: totalPrice })
  }

  addGift = (e) => {
    e.preventDefault()
    this.getTotalPrice()

    let newGift = {
      recipientName: this.state.recipientName,
      giftName: this.state.giftName,
      giftPrice: this.state.giftPrice,
      giftImage: this.state.giftImage
    }

    if ((this.state.totalPriceOfList + this.state.giftPrice) > this.state.budget) {
      alert('You Can Not Purchase This!')
    } else {
      const newShoppingList = this.state.shoppingList
      newShoppingList.push(newGift)
      this.setState({ shoppingList: newShoppingList })
      this.setState({ recipientName: '', giftImage: '', giftPrice: '', giftName: '' })
    }
  }

  render () {
    return (
      <div>
        <GiftForm
          addGift={this.addGift}
          recipientNameChange={this.recipientNameChange}
          giftNameChange={this.giftNameChange}
          giftPriceChange={this.giftPriceChange}
          giftImageChange={this.giftImageChange}
        />
        {
          this.state.shoppingList.length !== 0
            ? <ListOfGifts shoppingList={this.state.shoppingList} />
            : <p>You need to add some things to your list!</p>
        }
      </div>

    )
  }
}

export default ListContainer
