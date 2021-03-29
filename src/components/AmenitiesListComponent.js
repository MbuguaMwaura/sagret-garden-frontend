import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import './navbar.css'
import { Row, Col } from 'react-bootstrap'
import amenties from '../data/amenities'

class AmentiesListComponent extends Component {
    render() {
        return (
            <>
                {amenties.map((amenity,i) => (
                    <div style={{display:"flex",gap:"10px" ,margin:"5px 0" }} key={i}>
                         <Image src={amenity.icon} style={{ width: "40px" ,height: "auto" }} />
                         <p style={{margin:"auto 0" ,fontFamily:"Nunito",fontSize:"10px"}}>
                         {amenity.text}
                        </p>
                    </div>
                 
                ))
            }
            </>
        )
    }
}

export default AmentiesListComponent;
