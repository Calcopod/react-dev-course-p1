import React from 'react';
import Card from '../Card/card';
import './card_list.styles.css'

const CardList = props => {
  console.log( props )

  return (
    <div className="card-list">
      {
        props.monsters.map( (monster, idx) => (
          <Card idx={idx} monster={monster} />
        ))
      }
    </div>
  )
}

export default CardList;