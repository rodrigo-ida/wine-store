import React from 'react'

import './CarouselPhoto.css'

export default props => {

    return (
        <div className={'carouselPhoto' + ' ' + props.classPhoto}></div>
    )
}