import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import './navbar.css'
import { Row, Col } from 'react-bootstrap'
import garden from '../data/garden'

class AboutComponent extends Component {

    render() {
        return (
            <>
                <div className="back_container" ></div>
                <div className="about_us_container"  >

                <Row>
                    <Col className="col-sm-6 col-12">
                        <p style={{ fontFamily: "Optima", color: "#FFFFFF", fontSize: "20px", textAlign: "center", fontWeight: "bold" }}>
                            A Blooming Treasure
                        </p>
                    </Col>

                    <Col className="col-sm-6 col-12">
                        <Row>
                            <Col className="col-12">
                                <p style={{ fontFamily: "Nunito", color: "#FFFFFF", fontSize: "12px" ,textAlign:"initial",lineHeight: "24px",fontWeight: "bold"}}>
                                Sagret gardens is a beautiful botanical garden located on 
                                 Kiambu Road. 
                                 It is made up of 4 cascading gardens each surrounded by 
                                 lush floral vegetation. 
                                 This peaceful haven within is 
                                 the perfect venue to host everything 
                                 from small intimate picnics to extravagant events. 
                                </p>
                            </Col>
                        </Row>

                    </Col>
                </Row>

    
                
               
            </div>

            <div className="main_container">

                 <Row style={{ margin: "unset", padding:"unset"}}>
                    <Col className="col-sm-6 col-12 our_gardens_container" >
                        <p style={{ fontFamily: "Optima", color: "#FFFFFF", fontSize: "20px", textAlign: "center", fontWeight: "bold" }}>
                            Our Gardens
                        
                        </p>
                        <Image className="our_gardens_image" src="our_gardens_image.png" style={{ margin: "auto",width:"-webkit-fill-available" }} /> 
                    </Col>

                    <Col className="col-sm-6 col-12 amenities_container" style={{margin:"auto" }}>
                        <Row style={{marginTop:"10px" }}>
                            <Col className="col-12" >
                            {garden.map((amenity,i) => (
                                <div style={{display:"flex",gap:"10px" ,margin:"5px 0" }} key={i}>
                                    <Row>
                                        <Col className="col-2">
                                            <Image src={amenity.icon} style={{ width: "40" ,height: "auto" ,margin:"5px 0"}} />
                                        </Col>
                                        <Col className="col-10" style={{margin:"auto" }}>
                                        <p style={{margin:"auto 0" ,fontFamily:"Nunito",fontSize:"12px",textAlign:"left"}}>
                                            {amenity.text}
                                        </p>
                                        </Col>
                                    </Row>
                                   
                                    
                                </div>
                            
                                ))
                            }
                            </Col>
                        </Row>

                    </Col>
                </Row>



            </div>
         
            </>
        )
    }
}

export default AboutComponent;
