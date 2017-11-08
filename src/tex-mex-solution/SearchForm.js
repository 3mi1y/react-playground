
import React from 'react'
import PropTypes from 'prop-types'

const SearchForm = ({ removeSpicyItems, removeMediumItems, removeMildItems, handleSearchTermChange, updateMenuList, resetSearch, searchTerm }) => {
  return (
    <div>
      <div>
        <label />Remove Mild
        <input type='checkbox' onChange={removeMildItems} />
        <label />Remove Medium
        <input type='checkbox' onChange={removeMediumItems} />
        <label />Remove Spicy
        <input type='checkbox' onChange={removeSpicyItems} />
      </div>
      <input onChange={handleSearchTermChange} value={searchTerm} />
      <button type='button' onClick={updateMenuList}>Search menu items</button>
      <button type='button' onClick={resetSearch}>Reset</button>
    </div>
  )
}

SearchForm.propTypes = {
  handleSearchTermChange: PropTypes.func.isRequired,
  updateMenuList: PropTypes.func.isRequired,
  searchTerm: PropTypes.string,
  resetSearch: PropTypes.func.isRequired,
  removeSpicyItems: PropTypes.func.isRequired,
  removeMediumItems: PropTypes.func.isRequired,
  removeMildItems: PropTypes.func.isRequired
}

export default SearchForm
