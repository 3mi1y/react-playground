const sentences = [
  'I like long walks on the beach',
  'Coffee is for closers',
  'He walks his dog every other day',
  'It is almost thanksgiving!',
  'I lost my christmas list'
]

const searchSentence = (arr, word) => {

  const matchedSentences = arr.filter(sentence => {
    return sentence.split(' ').includes(word)
  })

  return matchedSentences
}

console.log(searchSentence(sentences, 'I'))
