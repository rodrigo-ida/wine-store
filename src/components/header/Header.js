import React from 'react'

import './Header.css'

export default props => {

    return (
        <header className="header">
            {props.children}
            <div className="header__logo"></div>
        </header>
    )
}