
import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    color: 'red',
    marginBottom: 20
  },
  filterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'flex-start'
  }
}
const SearchForm = ({ removeSpicyItems, removeMediumItems, removeMildItems, handleSearchTermChange, updateMenuList, resetSearch, searchTerm }) => {
  return (
    <div style={styles.container}>
      <div style={styles.filterContainer}>
        <div>
          <input type='checkbox' onChange={removeMildItems} />
          <label />Remove Mild
        </div>
        <div>
          <input type='checkbox' onChange={removeMediumItems} />
          <label />Remove Medium
        </div>
        <div>
          <input type='checkbox' onChange={removeSpicyItems} />
          <label />Remove Spicy
        </div>
      </div>
      <div style={styles.searchContainer}>
        <input onChange={handleSearchTermChange} value={searchTerm} />
        <button type='button' onClick={updateMenuList}>Search menu items</button>
        <button type='button' onClick={resetSearch}>Reset</button>
      </div>
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
