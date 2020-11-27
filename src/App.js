import React from 'react'
import './App.css'
// import hangman1 from './images/Hangman/Hangman 1.png'
import Header from './Header'
import ChosenWord from './ChosenWord'
import Alphabet from './Alphabet'
import alphaRef from './reference'

class App extends React.Component {

  state = {
    words: ['Shoe', 'Word', 'Dram', 'Coal']
  }


  render() {
    return (
      <div className="App">

        <Header />

        <ChosenWord chosenWords={this.state.words} />

        <Alphabet />

      </div>
    );
  }

}

export default App;
