import React from 'react'
import './NavItem.css'



export default props => {

    let modal ='' 
    if(props.navModalState === props.classe){
        modal = props.modalElement
    }



    return(
        <div onMouseEnter={props.showNavModal} onMouseLeave={props.hideNavModal} className="nav__item"> 
            <li >{props.children}</li>
            {modal}
        </div>
    )
}