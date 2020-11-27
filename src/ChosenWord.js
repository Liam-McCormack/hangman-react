import React from 'react'
import './App.css'
import './App'

const ChosenWord = ({ chosenWords }) => {
    const word = chosenWords[Math.floor(Math.random() * chosenWords.length)]
    const lowercaseWord = word.toLowerCase()
    const wordArray = lowercaseWord.split('')

    return (
        <div>
            <ul class="word-list">
                {wordArray.map(letter => {
                    return (
                        <li class="word-list-item">
                            {letter}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ChosenWord;