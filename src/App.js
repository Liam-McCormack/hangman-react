import React from 'react'
import './App.css'
// import hangman1 from './images/Hangman/Hangman 1.png'
import Header from './Header'
import ChosenWord from './ChosenWord'
import Alphabet from './Alphabet'
import alphaRef from './reference'

class App extends React.Component {

  state = {
    words: ['Shoe', 'Word', 'Dram', 'Coal', 'Calamity'],
    selectedWord: [],
    clickedLetters: []
  }

  componentDidMount() {
    const word = this.state.words[Math.floor(Math.random() * this.state.words.length)]
    const lowercaseWord = word.toLowerCase()
    const wordArray = lowercaseWord.split('')
    this.setState({ selectedWord: wordArray })
    console.log(this.state, 'mount state')

  }

  clickFunc = (event) => {
    console.log(event, 'event')
    //received letter clicked as a number from reference obj
    // const alpha = Object.entries(alphaRef)

    // letterId is the clicked letter, wordArray is the word from the game
    // const letterId = event.target.id
    console.log(this.state, 'state')
    // const word = this.state.selectedWord


    // this.setState({ clickedLetters: [...letterId] })
    //iterate through ref obj, find match
    // for (let i in word) {
    //   console.log('in the loop')
    //   if (word[i] === letterId) {
    // let receivedLetter = alpha[i][1]

    // console.log('found you!')
    // if indexOf returns -1, letter is not in the wordArray. Then LOGIC.
    // if (this.state.selectedWord.indexOf(receivedLetter) === -1) {
    //   console.log('Wayohhh!!')
    // this.setState(currentState => { clickedLetters: [...clickedLetters, receivedLetter] })
    // }
    // }
    // }
  }

  render() {
    console.log(this.state, 'render state')
    return (
      <div className="App">

        <Header />

        <ChosenWord wordArray={this.state.selectedWord} />
        <br></br>
        <Alphabet clickFunc={this.clickFunc} />

      </div>
    );
  }

}

export default App;
