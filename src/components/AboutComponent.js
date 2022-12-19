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
                <div className="about_us_container max_limit"  >

                <Row>
                    <Col className="col-sm-6 col-12">
                        <p id="blooming_title">
                            A Blooming Treasure
                        </p>
                    </Col>

                    <Col className="col-sm-6 col-12">
                        <Row>
                            <Col className="col-12">
                                <p className="text_size_12" style={{ fontFamily: "Nunito", color: "#FFFFFF",textAlign:"initial",lineHeight: "30px",fontWeight: "bold"}}>
                                Sagret gardens is a beautiful botanical garden located on 
                                 Kiambu Road. 
                                 It is made up of 4 cascading gardens each surrounded by 
                                 lush floral vegetation. 
                                 This peaceful haven within the city is 
                                 the perfect venue to host all gatherings
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
                        <p className="hidden_on_large" style={{ fontFamily: "Nunito", color: "#FFFFFF", fontSize: "20px", textAlign: "center", fontWeight: "bold" }}>
                            Our Gardens
                        
                        </p>
                        <Image className="our_gardens_image" src="our_gardens_image.png" style={{ height: "490px",width:"435px",objectFit:"cover",borderRadius:"25px" }} /> 
                    </Col>

                    <Col className="col-sm-6 col-12 amenities_container" >
                        <Row style={{marginTop:"10px" }}>
                            <Col className="col-12" >
                            <p className="medium_green_color text_large_40 tidbits_title" style={{margin:"5px 0" ,fontFamily:"Nunito",fontWeight:"bold"}}>Garden Tidbits</p>
                            {garden.map((amenity,i) => (
                                <div className="tidbits" style={{display:"flex"  }} key={i}>
                                    <p className="text_size_12 dark_green_color tidbits_text" style={{fontFamily:"Nunito", fontWeight:"bold"}}>
                                            {amenity.text}
                                    </p>
                                    
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
