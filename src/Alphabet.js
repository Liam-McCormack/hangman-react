import React from 'react'
import './App'
import alphaRef from './reference'

const Alphabet = (props) => {
    const letterArray = Object.values(alphaRef)

    return (
        <div>
            <ul class="letter-list">
                {letterArray.map((letter) => {
                    return (
                        <li class="letter-list-item"
                            onClick={(event) => { props.clickFunc(event.target.id) }}
                            id={letter}>
                            {letter}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Alphabet;