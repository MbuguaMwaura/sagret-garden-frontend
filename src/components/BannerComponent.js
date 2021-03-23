import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'

class BannerComponent extends Component {

    render() {
        return (
            <>
            <div>
                <Image src="garden_sample_image.jpeg"  style={{width:"-webkit-fill-available",maxWidth:"100%"}} />
            </div>
            
            </>
        )
    }
}

export default BannerComponent;
