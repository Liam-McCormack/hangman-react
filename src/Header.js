import React from 'react'
import './App'
import hangman1 from './images/Hangman/Hangman 1.png'

const Header = (props) => {
    return (
        <header>
            <h1>Hangman on React!</h1>
            <h2>Guess the word</h2>
            <div>
                <img src={hangman1} alt="empty gallows" width='200px' height='300px' />
            </div>
        </header>
    )
}

export default Header;