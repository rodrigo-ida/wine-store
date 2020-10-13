import React from 'react'
import {Link} from 'react-router-dom'

import './footer.css'

export default props =>{

    return(
        <footer className="footer">
            <div className="footer__subscribe">
                <h2 className="footer__subscribe-h2">INSCREVA-SE PARA RECEBER PROMOÇÕES E OFERTAS EXCLUSIVAS</h2>
                <input type='email' placeholder="Insira o seu Email" className="footer__subscribe__email-input" />
                <button type="submit" className="footer__subscribe__submit-btn"> Enviar</button>
            </div>
            <div className="footer__container-links" >
                <ul className="footer__main-list">
                    <li><Link to="#"> Promoções</Link></li>
                    <li><Link to="#"> Novos Produtos</Link></li>
                    <li><Link to="#"> Melhores Produtos</Link></li>
                </ul>
                <ul className="footer__second-list">
                    <li><Link to="#"> Delivery</Link></li>
                    <li><Link to="#"> Informações Legais</Link></li>
                    <li><Link to="#"> Nossos Termos</Link></li>
                    <li><Link to="#"> Sobre Nós</Link></li>
                    <li><Link to="#"> Pagamento Seguro</Link></li>
                    <li><Link to="#"> Contato</Link></li>
                    <li><Link to="#"> Mapa do Site</Link></li>
                </ul>
            </div>
            <div className="footer__bottom">
                <div className="footer__bottom-icons">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-pinterest-p"></i>
                </div>
                    <div className="footer__copyright" >
                        <p>&#169; 2020, Todos os direitos reservados. Desenvolvido por Rodrigo Ida</p>
                    </div>
                    <div className="footer__cards">
                        <div className="visa cards__icon"></div>
                        <div className="paypal cards__icon"></div>
                        <div className="mastercard cards__icon"></div>
                        <div className="americanexpress cards__icon"></div>
                    </div>
            </div>


        </footer>
    )
}