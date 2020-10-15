import React from 'react'

import './TrendingCards.css'

export default props => {

    
    return(
        <div className="card" >
            <div className="card__img">
                <img src={props.img} alt="um vinho bonito" draggable='false' />
            </div>
            <div className="card__description" >
                <h1 className="card__description__title" > {props.title}</h1>
                <p className="card__description__p"> {props.body}</p>
                <p className="card__description__price"> R$ {(Math.random() * 20).toFixed(2)}</p>
                <button className="card__btn"> Incluir </button>
            </div>
        </div>
    )
}