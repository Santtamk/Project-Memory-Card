import React from 'react'

const Header = ({currentScore, bestScore}) => {
  // getting the score and best score from body.js
  return (
    <div>
        <h1>
            Memory Card Game
        </h1>
        <div>
            <p>Score: {currentScore}</p>
            <p>Best Score: {bestScore}</p>
        </div>

    </div>
  )
}

export default Header