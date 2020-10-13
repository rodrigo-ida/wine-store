import React from 'react'
import './nav.css'

import NavMobileContent from './navMobileContent/NavMobileContent'
import NavDesktopContent from './navdesktopContent/NavDesktopContent'
import NavBurgerModal from './navBurgerModal/NavBurgerModal'




export default props =>{

        const navContent = props.responsivityActivation ? <NavMobileContent burgerButtonHandler={props.burgerButtonHandler}/>: <NavDesktopContent />
     
        return (
            <nav >
                {navContent}
                < NavBurgerModal navBurgerBtnState={props.navBurgerBtnState}/>
            </nav>
    )
}
