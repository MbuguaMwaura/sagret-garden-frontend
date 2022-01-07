import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import banner from '../data/banner'
import './navbar.css'
import './large.css'

class BannerComponent extends Component {

    render() {
        return (
            <div className="contain">

                <Image className="banner_image" src="sagret_gardens_banner.jpg"  style={{width:"-webkit-fill-available",maxWidth:"100%",objectFit:"cover"}} />
          
            
            </div>
        )
    }
}

export default BannerComponent;
