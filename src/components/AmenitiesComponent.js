import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import './navbar.css'
import { Row, Col } from 'react-bootstrap'
import AmentiesListComponent from './AmenitiesListComponent'

class AmenitiesComponent extends Component {
    // style={{display:"flex",padding:"20px 50px",gap:"30px"}}
    render() {
        return (
            <>


                <div className="about_us_container padding"></div>
                <div className="negative_height" style={{ padding: "0 20vw" }}  >

                    <Row style={{textAlign:"initial"}}>

                        <Col className="col-sm-6 col-12">
                            <Row>
                                <Col className="col-12">
                                    <p style={{ fontFamily: "Nunito", color: "#FFFFFF", fontSize: "12px" ,textAlign: "end"}}>
                                        Sagret gardens is a beautiful botanical garden located on  Kiambu Road. It is made up of 4 cascading
                                        gardens each surrounded by lush diverse flora.
                                        This picturesque haven is the perfect
                                        venue to host everything from small intimate picnics
                                        to extravagant events.
                                </p>
                                </Col>

                                <Col className="col-12" style={{textAlign: "-webkit-right"}}>
                                    <div >
                                        <p className="explore_button">Explore the Gardens</p>
                                    </div>
                                </Col>
                            </Row>

                        </Col>
                        <Col className="col-sm-6 col-12" >
                            <p style={{ fontFamily: "Optima", color: "#FFFFFF", fontSize: "20px", fontWeight: "bold" ,maxWidth:"200px"}}>
                                The Sagret Garden
                                Amenities
                        </p>
                        </Col>
                    </Row>

                    <Row>
       
                        <Col style={{ paddingTop: "140px", paddingBottom:"20px" }} className="col-lg-6 col-12">
                          <AmentiesListComponent/>

                        </Col>
                        <Col  className="hidden_on_small col-lg-6 col-12" >
                            <Image src="choma.jpg" style={{ maxWidth: "300px", objectFit: "cover", height: "310px",transform:"rotate(270deg)" }} />
                        </Col>

                    </Row>

                </div>

            </>
        )
    }
}

export default AmenitiesComponent;
