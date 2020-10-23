import React from 'react'

import './salesCard.css'

export default props => (

    <div className="sales-card">
        <img src={props.img} alt={props.alt}/>
    </div>
)