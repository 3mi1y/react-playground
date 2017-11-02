import React from 'react'
import DATA from './DATA'

const AllNames = ({names}) => {

  const filteredNames = names.filter((name) => {
    return name.length === 4
  })

  const mappedNames = filteredNames.map((name) => {
    return <li>{name}</li>
  })

  return (
    <div>
      <ul>
        {
          mappedNames
        }
      </ul>
    </div>
  )
}

const NumbersComponent = ({numbers}) => {
  // greater than 30 and less than 70
  const filteredNumbers = numbers.filter((number) => {
    return number > 30 && number < 70
  })
  const mappedNumbers = filteredNumbers.map((number) => {
    return <p>{number}</p>
  })

  return (
    <div>
      {
        mappedNumbers
      }
    </div>
  )
}

const DisplayBooks = ({books}) => {

  const mappedBooks = books.map((book) => {
    return (
      <div>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
      </div>
    )
  })

  return (
    <div>
      { mappedBooks }
    </div>
  )
}

const MappingAndFiltering = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <AllNames names={DATA.names} />
      <NumbersComponent numbers={DATA.numbers} />
      <DisplayBooks books={DATA.books} />
    </div>
  )
}

export default MappingAndFiltering
