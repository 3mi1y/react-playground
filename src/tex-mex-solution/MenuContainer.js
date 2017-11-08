import React, {Component} from 'react'
import data from './Data'
import MenuList from './Menu'
import SearchForm from './SearchForm'

class MenuContainer extends Component {
  state = {
    menuItems: undefined,
    searchTerm: undefined

  }

  componentDidMount () {
    this.setState({menuItems: data.items})
  }

  handleSearchTermChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  updateMenuList = (e) => {
    alert('you are refreshing the page!')
    e.preventDefault()
    const updatedMenuItems = this.state.menuItems.filter(item => {
      return item.name === this.state.searchTerm
    })
    console.log(updatedMenuItems)
  }

  render () {
    return (
      <div>
        <SearchForm
          handleSearchTermChange={this.handleSearchTermChange}
          updateMenuList={this.updateMenuList}
        />
        {
          this.state.menuItems
            ? <MenuList foodItems={this.state.menuItems} />
            : <h3>You don't have menu items</h3>
        }
      </div>
    )
  }
}
export default MenuContainer
