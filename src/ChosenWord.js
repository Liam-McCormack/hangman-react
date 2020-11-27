// import React from 'react'
import './App.css'
import './App'

const ChosenWord = (props) => {
    const wordArray = props.wordArray
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