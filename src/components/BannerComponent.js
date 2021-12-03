import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import banner from '../data/banner'
import './navbar.css'

class BannerComponent extends Component {

    render() {
        return (
            <div className="contain">

                <Image src="sagret_gardens_banner.jpg"  style={{width:"-webkit-fill-available",maxWidth:"100%",objectFit:"cover",height:"350px"}} />
          
            
            </div>
        )
    }
}

export default BannerComponent;
