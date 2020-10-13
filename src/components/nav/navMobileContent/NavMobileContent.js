import React from 'react'

import './navMobileContent.css'

import NavItem from '../navItem/NavItem'

export default props => {

    return (
        <div className="nav-mobile-content">
            <button className="nav__burger-btn" onClick={props.burgerButtonHandler}><i className="fas fa-bars"></i></button>
            <div className='nav__item__container__list__icones'>
                <NavItem> <i className="fas fa-search"></i></NavItem>
                <NavItem> <i className="fas fa-user"></i> </NavItem>
                <NavItem> 
                    <i className="fas fa-shopping-cart"></i>
                    <p className="nav__item__container__list__icones__qtd">0</p>
                </NavItem>
        
            </div>
        </div>)
}