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
    budget: 5 // default budget value
  }

  recipientNameChange = (e) => this.setState({ recipientName: e.target.value })
  giftNameChange = (e) => this.setState({ giftName: e.target.value })
  giftPriceChange = (e) => this.setState({ giftPrice: e.target.value })
  giftImageChange = (e) => this.setState({ giftImage: e.target.value })
  updateShoppingList = (arr) => this.setState({ shoppingList: arr })

  checkTotalPriceOfGifts = (arr) => {
    let totalPrice = 0
    let exceedsBudget = false

    for (let i = 0; i < arr.length; i += 1) { // doesn't hurt to brush up on the for loops
      totalPrice += arr[i].giftPrice
      if (totalPrice > this.state.budget) {
        exceedsBudget = true
      }
    }
    return exceedsBudget
  }

  addGift = (e) => {
    e.preventDefault()
    console.log('from addGift()')

    const newShoppingList = this.state.shoppingList
    newShoppingList.push({
      recipientName: this.state.recipientName,
      giftName: this.state.giftName,
      giftPrice: this.state.giftPrice,
      giftImage: this.state.giftImage
    })

    if (this.checkTotalPriceOfGifts(newShoppingList) === false) {
      console.log('from if(this.checkTotalPriceOfGifts() === false)')
      this.updateShoppingList(newShoppingList)
      console.log('ShoppingList: ')
      console.log(this.state.shoppingList)
    } else {
      console.log('from else()')
      alert('You have exceeded your budget')
      console.log('You exceeded your budget')
      console.log(this.state.shoppingList)
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
