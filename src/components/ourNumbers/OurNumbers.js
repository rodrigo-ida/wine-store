import React from 'react'

import './OurNumbers.css'


export default props => {
    return(
        <div className="our-numbers-container">
            <div className="our-numbers-container__img"></div>
            <div className="our-numbers-container__numbers">
                <h1>CRUS WINE STORE</h1>
                <p className="our-numbers-container__numbers__p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Duis tristique est ut augue vehicula, vitae convallis lectus consequat. 
                    Quisque sed dapibus nisi, ut venenatis nunc. Nam posuere mauris diam, in semper tellus cursus vel. 
                    Donec velit mi, dignissim quis sem sit amet, vestibulum luctus urna. 
                    Aliquam nisl lectus,lectus mauris tincidunt vulputate.</p>

                <p className="our-numbers-container__numbers__p2">Nam posuere mauris diam, in semper tellus cursus vel. 
                    Donec velit mi, dignissim quis sem sit amet, vestibulum luctus urna. 
                    Aliquam nisl lectus,lectus mauris tincidunt vulputate.</p>
            </div>
        </div>
    )
}