import data from './data'

const searchSentences = (arr, word) => {
  const matchedSentences = arr.filter(sentence => {
    return sentence.split(' ').includes(word)
  })
  return matchedSentences
}

const sentences = data.sentences
console.log(searchSentences(sentences, 'like'))
console.log(searchSentences(sentences, 'dog'))

// See if you can work them up to this example.
// Start with some basic includes examples.
// const nums = [1,3,5]
// nums.includes(1) -> true
// Just execute this file directly with `node`
// Make sure to review the split(' ') method as well 
// You could show them a quick example of how they work together in the console
// ['It is almost thanksgiving!'].split(' ').includes('thanksgiving') -> true
