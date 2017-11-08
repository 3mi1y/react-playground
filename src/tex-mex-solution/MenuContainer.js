import React, {Component} from 'react'
import data from './Data'
import MenuList from './Menu'
import SearchForm from './SearchForm'

const styles = {
  menu: {
    margin: 20,
    padding: 20,
    width: '75%'
  }
}

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

  removeMildItems = (event) => {
    const checked = event.target.checked
    console.log(checked)
    if (checked) {
      const filterOutMenuItems = this.state.menuItems.filter(item =>
        item.spiceLevel > 4
      )
      this.setState({ menuItems: filterOutMenuItems })
    } else {
      this.setState({ menuItems: data.items })
    }
  }

  removeMediumItems = (event) => {
    const checked = event.target.checked
    console.log(checked)
    if (checked) {
      const filterOutMenuItems = this.state.menuItems.filter(item =>
        item.spiceLevel < 4 && item.spiceLevel > 7
      )
      this.setState({ menuItems: filterOutMenuItems })
    } else {
      this.setState({ menuItems: data.items })
    }
  }

  removeSpicyItems = (event) => {
    const checked = event.target.checked
    console.log(checked)
    if (checked) {
      const filterOutMenuItems = this.state.menuItems.filter(item =>
        item.spiceLevel < 7
      )
      this.setState({ menuItems: filterOutMenuItems })
    } else {
      this.setState({ menuItems: data.items })
    }
  }

  updateMenuList = (e) => {
    e.preventDefault()
    const updatedMenuItems = this.state.menuItems.filter(item => {
      const menuItemName = item.name.trim().toLowerCase()
      const searchTerm = this.state.searchTerm.trim().toLowerCase()
      return menuItemName.split(' ').includes(searchTerm)
    })
    console.log(updatedMenuItems)
    this.setState({ menuItems: updatedMenuItems })
  }

  resetSearch = () => {
    this.setState({menuItems: data.items, searchTerm: ''})
  }

  render () {
    return (
      <div style={styles.menu}>
        <SearchForm
          resetSearch={this.resetSearch}
          handleSearchTermChange={this.handleSearchTermChange}
          updateMenuList={this.updateMenuList}
          searchTerm={this.state.searchTerm}
          removeMediumItems={this.removeMediumItems}
          removeMildItems={this.removeMildItems}
          removeSpicyItems={this.removeSpicyItems}
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
