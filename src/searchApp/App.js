import React, {Component} from 'react'
import data from './sentences'

class SearchApp extends Component {

  state = {
    sentences: undefined,
    searchTerm: undefined
  }

  componentDidMount() {
    this.setState({ sentences: data.sentences })
  }

  reset = () => {
    this.setState({ sentences: data.sentences, searchTerm: '' })
  }

  handleSearchTermChange = (e) => {
    let wordToSearch = e.target.value
    this.setState({ searchTerm: wordToSearch })
  }

  submitForm = (e) => {
    e.preventDefault()

    //const sentences = this.state.sentences
    //const searchTerm = this.state.searchTerm
  
    if (!this.state.searchTerm) {
      alert('Must enter search term!!!')
    } else {
      const matchedSentences = this.state.sentences.filter(sentence => {
        return sentence.split(' ').includes(this.state.searchTerm)
      })
      console.log(matchedSentences)
    
      if (matchedSentences.length === 0) {
        this.setState({ sentences: ['No matched sentences'] })
      } else {
        this.setState({ sentences: matchedSentences })
      }
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <h2>Google</h2>
          <input
            value={this.state.searchTerm}
            onChange={this.handleSearchTermChange}
            type='text'
            placeholder='Search' 
          />
          <button type='submit'>Search</button>
        </form>

        <ul>
          {
            this.state.sentences
            ? this.state.sentences.map((sentence, index) => {
              return <li key={index}>{sentence}</li>
            })
            : <p>Loading Sentences</p>
          }
        </ul>

        <button type='button' onClick={this.reset}>Reset</button>

      </div>
    )
  }
}

export default SearchApp