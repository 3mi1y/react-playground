import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    borderBottom: '1px dotted black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    fontSize: '10px'
  },
  innerDiv: {
    width: '33.33%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'left'
  },
  text: {
    padding: '0px',
    margin: '0px'
  }
}

const DrinkCard = ({drink}) => {
  return (
    <div style={styles.container} >
      <div style={styles.innerDiv}>
        <h3 style={styles.text}>{drink.beverageName}</h3>
      </div>
      <div style={styles.innerDiv}>
        <p style={styles.text}>{drink.category}</p>
      </div>
      <div style={styles.innerDiv}>
        <p style={styles.text}>{drink.beveragePrep}</p>
      </div>
    </div>
  )
}

DrinkCard.propTypes = {
  drink: PropTypes.object.isRequired
}

export default DrinkCard
