import React from 'react'

import './ScrollModal.css'

export default props => {

    

    let show = props.subscribeModalState ? "scroll-modal" : "toggleOFF"

    return(
        <div className={show}> 
            <div className="scroll-modal__container">
            <div className="scroll-modal__container__img"></div>
            <div className="scroll-modal__container__contato">
                <div className="scroll-modal__container__close">
                    <button className="scroll-modal__container__close__button" onClick={props.hideSubscribeModal}> X </button>
                </div>
                <h1>Cadastre-se e ganhe descontos incríveis!!!</h1>
                <p> Cadastre-se em nossa newsletter e receba novidades sobre nossos novos produtos.</p>
                <input className="scroll-modal__container__contato__email" type="text" placeholder="Coloque seu Email" />
                <input className="scroll-modal__container__contato__submit" type="submit" value="INSCREVA-SE" />
                <div className="scroll-modal__container__contato__icons">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-pinterest-p"></i>
                </div>
                <div className="scroll-modal__container__contato__checkbox">
                    <input type="checkbox"  />
                    <p > Não mostre novamente </p>
                </div>
            </div>
        </div>
    </div>
    )
}