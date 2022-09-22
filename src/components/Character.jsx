import React from 'react';
import '../css/index.css'

function Characters({character}) {
  return (
  <div className='card'>
    <img className='card__img' src={character.image} alt={character.name} />
    <div className='card__text'>
    <h3>{character.name}</h3>
    <p>{character.origin.name}</p>
    </div>
  </div>
  )
}

export default Characters