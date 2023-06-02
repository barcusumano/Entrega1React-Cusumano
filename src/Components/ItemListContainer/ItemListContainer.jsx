import './itemlistcontainer.css';

import React from 'react'

const ItemListContainer = (props) => {
  return (
    <div>
        <h1>
            {props.greeting}
        </h1>
        <h2>{props.subtitle}</h2>
    </div>
  )
}

export default ItemListContainer