import React from 'react'
import PropTypes from 'prop-types'

const Classes = ({classData}) => {
  return (
    <div>
      {
        classData.map(item => {
          return (
            <div>
              <h1>{item.className}</h1>
              <p>{item.location}</p>
              <p>{item.time}</p>
            </div>
          )
        })
      }
    </div>
  )
}

Classes.propTypes = {
  classData: PropTypes.array.isRequired
}

export default Classes
