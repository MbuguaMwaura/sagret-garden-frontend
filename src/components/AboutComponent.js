import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import './navbar.css'
import { Row, Col } from 'react-bootstrap'

class AboutComponent extends Component {

    render() {
        return (
            <>
            
         
                <div className="about_us_container padding"></div>
                <div className="negative_height" style={{ padding: "0 20vw"}}  >

                <Row>
                    <Col className="col-sm-6 col-12">
                        <p style={{ fontFamily: "Optima", color: "#FFFFFF", fontSize: "20px", textAlign: "end", fontWeight: "bold" }}>
                            A Blooming Treasure <br />
                            Est. 2020
                        </p>
                    </Col>

                    <Col className="col-sm-6 col-12">
                        <Row>
                            <Col className="col-12">
                                <p style={{ fontFamily: "Nunito", color: "#FFFFFF", fontSize: "12px" ,textAlign:"initial"}}>
                                    Sagret gardens is a beautiful botanical garden located on  Kiambu Road. It is made up of 4 cascading
                                    gardens each surrounded by lush diverse flora.
                                    This picturesque haven is the perfect
                                    venue to host everything from small intimate picnics
                                    to extravagant events.
                                </p>
                            </Col>

                            <Col className="col-12">
                                <div >
                                    <p className="explore_button">Explore the Gardens</p>
                                </div>
                            </Col>
                        </Row>

                    </Col>
                </Row>

                <Row>
                    <Col style={{ textAlign: "end" }} className="hidden_on_small col-lg-6 col-12">
                        <Image src="about_us_image.jpg" style={{ maxWidth: "300px", objectFit: "cover", height: "350px" }} />
                    </Col>

                    <Col style={{ paddingTop: "150px" }} className="col-lg-6 col-12">
                        <p style={{ fontFamily: "Optima", color: "#1c6a5c", fontSize: "20px", fontWeight: "bold",textAlign:"initial" }}>
                            Our Gardens
                        </p>
                        <p style={{ fontFamily: "Nunito", color: "#2a4c46", fontSize: "12px",textAlign:"initial"}}>
                            Sagret gardens is a beautiful botanical garden located on  Kiambu Road. It is made up of 4 cascading gardens each surrounded by lush diverse flora. This picturesque haven is the perfect venue to host everything from small intimate picnics to extravagant events.
                            <br/><br/>
                            Sagret gardens is a beautiful botanical garden located on  Kiambu Road. It is made up of 4 cascading gardens each surrounded
                        </p>

                    </Col>
                </Row>
               
          

                
               
            </div>
         
            </>
        )
    }
}

export default AboutComponent;
