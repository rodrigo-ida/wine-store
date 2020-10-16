import React from 'react'
import './nav.css'

import NavMobileContent from './navMobileContent/NavMobileContent'
import NavDesktopContent from './navdesktopContent/NavDesktopContent'
import NavBurgerModal from './navBurgerModal/NavBurgerModal'




export default props =>{

        const navContent = props.responsivityActivation ? 
        <NavMobileContent burgerButtonHandler={props.burgerButtonHandler}/> : 
        <NavDesktopContent 
        showNavModal={props.showNavModal}
        navModalState={props.navModalState}
        hideNavModal={props.hideNavModal}

        />
     
        return (
            <nav >
                {navContent}
                < NavBurgerModal navBurgerBtnState={props.navBurgerBtnState}/>
            </nav>
    )
}
