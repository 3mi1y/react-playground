import React, {Component} from 'react'
import data from './sentences'

// 1) Start with a basic map of sentences
// 2) Add the form with the onsubmit button.
// 3) Have the on submit simply console.log (proving that it is hooked up)
// 4) Hook up the onChange and add the state for 'searchTerm'
// 5) On form submit log the search term
// 6) On form submit use the filter function to update sentences
// 7) Add a gate so you can not submit if searchTerm is undefind
// 8) Add a gate that will return a senetnce if the matchedSentences is empty

// If there is extra time:
// - extract the form and the results into their own components
// - do some styling

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
}

class App extends Component {
  state = {
    sentences: undefined,
    searchTerm: undefined
  }
  componentDidMount () {
    this.setState({ sentences: data.sentences })
  }
  handleSearchTermChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }
  reset = () => {
    this.setState({ sentences: data.sentences, searchTerm: '' })
  }
  submitForm = (e) => {
    e.preventDefault()
    const sentences = this.state.sentences
    const searchTerm = this.state.searchTerm
    if (!searchTerm) {
      alert('Must enter search term')
    } else {
      const matchedSentences = sentences.filter(sentence => {
        return sentence.split(' ').includes(searchTerm)
      })

      if (matchedSentences.length === 0) {
        this.setState({ sentences: ['No matched sentences'] })
      } else {
        this.setState({ sentences: matchedSentences })
      }
    }
  }
  render () {
    return (
      <div style={styles.container}>
        <form onSubmit={this.submitForm}>
          <div>
            <h2>Google</h2>
            { /* The value tag associates the input value with our state
              That way the input changes when we clear the state
            */}
            <input
              value={this.state.searchTerm}
              type='text'
              placeholder='Search'
              onChange={this.handleSearchTermChange}
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
        <div>
          {
            this.state.sentences
              ? this.state.sentences.map((sentence, index) =>
                <p key={index}> {sentence} </p>
              )
              : <p>Loading Sentences</p>
          }
        </div>
        <button type='button' onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

export default App
