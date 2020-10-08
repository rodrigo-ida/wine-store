import React from 'react'

import './CategoryCards.css'

export default props => {

    return(
        <div className="shop-category__description__card">
            <div className="icon__container"> 
                <i className={`${props.icon} icon`}></i>
            </div>
            <p> {props.description} </p>
        </div>
    )
}