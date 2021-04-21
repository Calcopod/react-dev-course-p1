import React from 'react';
import './card.styles.css'

const Card = props => {
  return (
    <div className="card-container">
      <img alt="Monster" src={`https://robohash.org/${props.idx}?set=set1&size=180x180`} />
      <h1 key={props.idx}>{props.monster.name}</h1>
      <p> {props.monster.email} </p>
      <p> {props.monster.phone} </p>
    </div>
  )
}

export default Card;