import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import './navbar.css'

class BannerComponent extends Component {

    render() {
        return (
            <div className="contain">

                <Image src="sagret_gardens_banner.jpeg"  style={{width:"-webkit-fill-available",maxWidth:"100%",objectFit:"cover",height:"450px",filter:"brightness(0.65)"}} />
                <div className="center title">Sagret Gardens</div>
            
            </div>
        )
    }
}

export default BannerComponent;
