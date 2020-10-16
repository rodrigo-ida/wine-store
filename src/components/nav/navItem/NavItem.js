import React from 'react'
import {Link} from 'react-router-dom'
import './NavItem.css'



export default props => {

    let modal ='' 
    if(props.navModalState === props.classe){
        modal = props.modalElement
    }



    return(
        <div onMouseEnter={props.showNavModal} onMouseLeave={props.hideNavModal} className={props.classe} id="nav__item"> 
            <li id="nav__item-li">{props.children} </li>
            {modal}
        </div>
    ) 
}