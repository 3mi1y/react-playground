// Vanilla js warmup/review for filtering and mapping
// challenges created based off of an array of class objects

const classes = [
  {
    name: 'Knitting for Beginners',
    length: 3,
    cost: 50,
    instructor: 'Suzy Knitter',
    location: 'Beads, Yarns and Threads'
  },
  {
    name: 'How to Tie a Tie',
    length: 1,
    cost: 100,
    instructor: 'Dr. Johnson',
    location: 'UC, 2nd floor, Room 101'
  },
  {
    name: 'Basket Weaving',
    length: 5,
    cost: 300,
    instructor: 'Phylis Taylor',
    location: 'Online'
  },
  {
    name: 'Intro to Guitar',
    length: 3,
    cost: 0,
    instructor: 'Professor Anderson',
    location: 'Music Building, Room 406'
  },
  {
    name: 'How to make Royal Icing for Sugar Cookies',
    length: 2,
    cost: 20,
    instructor: 'Ms. ButterBottom',
    location: 'The Good Food Store'
  },
  {
    name: 'FREE Resume Building Course',
    length: 2,
    cost: 0,
    instructor: 'Professor Haslam',
    location: 'UC, main floor'
  }
]

// Challenge One - Use filter or map to return an array of class names
const names = classes.map(x => {
  return x.name
})
// console.log(names)

// Challenge Two - User filter or map to return an array of descriptions for each class
const classInfo = classes.map(x => {
  return `Name: ${x.name}, Instructor: ${x.instructor}, Location: ${x.location}, Price: $${x.price}`
})
// console.log(classInfo)

// Challenge One - Use filter or map to return an array of the free classes
const freeClasses = classes.filter(x => {
  return x.cost === 0
})
// console.log(freeClasses)

// Challenge Two - User filter and/or map to return the name of the online classes
const onlineClasses = classes.filter(x => {
  return x.location === 'Online'
}).map(x => {
  return x.name
})
// console.log(onlineClasses)

// Challenge Three - Use filter and/or map to only return the names of classes that only take two hours or less and cost less than $50
const shortCheapClasses = classes.filter(x => {
  return x.length <= 2 && x.cost <= 50
}).map(x => {
  return x.name
})
console.log(shortCheapClasses)
