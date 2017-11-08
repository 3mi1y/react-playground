
import React from 'react'
import PropTypes from 'prop-types'

const SearchForm = ({ handleSearchTermChange, updateMenuList }) => {
  return (
    <div>

      <input onChange={handleSearchTermChange} />
      <button type='button' onClick={updateMenuList}>Search menu items</button>

    </div>
  )
}

SearchForm.propTypes = {
  handleSearchTermChange: PropTypes.func.isRequired,
  updateMenuList: PropTypes.func.isRequired
}

export default SearchForm
