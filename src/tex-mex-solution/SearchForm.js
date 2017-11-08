
import React from 'react'
import PropTypes from 'prop-types'

const SearchForm = ({ handleSearchTermChange, updateMenuList, resetSearch, searchTerm }) => {
  return (
    <div>

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
  resetSearch: PropTypes.func.isRequired
}

export default SearchForm
