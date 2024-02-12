import React from 'react'
import './cardstyles.css'

const Card = (props) => {
  return (
    <div>
        <figure>
            <img src={props.image} alt={props.title}/>
        <figcaption>{props.title}</figcaption>
        </figure>
    </div>
  )
}

export default Card