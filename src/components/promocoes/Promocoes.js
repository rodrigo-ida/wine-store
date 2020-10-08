import React from 'react'

import './Promocoes.css'

export default props => {

    return(
        <div className="promocoes-container" >
            <div className="promocoes-container__fresh"></div>
            <div className="promocoes-container__special"></div>
            <div className="promocoes-container__quality"></div>
        </div>
    )
}