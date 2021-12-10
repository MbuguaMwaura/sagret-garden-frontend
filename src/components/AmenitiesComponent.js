import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import './navbar.css'
import { Row, Col } from 'react-bootstrap'
import AmentiesListComponent from './AmenitiesListComponent'

class AmenitiesComponent extends Component {
    render() {
        return (
            <>


                <div style={{ backgroundColor: "#2a4c46", marginTop: "10px"}}>
                    <p style={{ paddingTop: "24px", paddingBottom: "24px", textAlign: "center", fontFamily: "Optima", color: "#ffffff", fontSize: "20px", fontWeight: "bold" }}>
                        The Sagret Garden Amenities
                    </p>
                </div>
                <div style={{ marginTop: "-30px" }}  >

                    <Row style={{ marginRight: "unset", marginLeft: "unset" }}>
                        <Col className="col-6">
                            <Image src="choma.jpg" style={{ width: "inherit", objectFit: "cover", borderRadius: "4px", boxShadow: "7px 7px 11px 0 rgb(0 0 0 / 10%)" }} />

                        </Col>

                        <Col className="col-6" style={{ margin: "auto" }}>
                            <p style={{ fontFamily: "Nunito", color: "#2a4c46", fontSize: "11px", textAlign: "start", paddingTop: "30px", fontWeight: "bold", lineHeight: "24px" }}>
                                We are not just a garden, we are a little slice of eden. To ensure the comfort and relaxation of all our guests. Sagret Gardens has incorporated a variety of amenities and services.
                                </p>
                        </Col>
                    </Row>


                    <Row style={{ marginRight: "unset", marginLeft: "unset" }}>

                        <Col style={{ paddingBottom: "20px" }} className="col-lg-6 col-12">
                            <AmentiesListComponent />

                        </Col>


                    </Row>

                </div>

                <div style={{ backgroundColor: "#2a4c46", marginTop: "10px", flexDirection: "column", alignItems: "center",paddingLeft:"10px",paddingRight:"10px"  }} >

                    <div style={{ alignItems: "center", display: "flex", flexDirection: "column" }}>
                        <p className="inclusive_title" style={{ marginTop: "20px" }}>All Inclusive Experiences</p>
                    </div>


                    <Row style={{ marginRight: "unset", marginLeft: "unset" }}>

                        <Col className="col-lg-6 col-6" style={{borderRight: "0.5px solid #146D69",padding:"unset" }} >
                            <div className="amen_container_left">
                            
                            <Image className="rounded_image" src="our_gardens_image.png" />
                            <div className="indicator"></div>
                            </div>
                      
                            
                        </Col>

                        <Col className="col-lg-6 col-6" style={{ borderLeft: "0.5px solid #146D69", display: "flex", alignItems: "center" }}>
                            


                            <p className="experience_text">Intimate Dates</p>
                        </Col>

                        
                        <Col className="col-lg-6 col-6" style={{ justifyContent: "end",borderRight: "0.5px solid #146D69", display: "flex", alignItems: "center" }}>
                        <p className="experience_text">Birthdays, Showers & more</p>
                        </Col>
                        <Col className="col-lg-6 col-6" style={{borderLeft: "0.5px solid #146D69",padding:"unset" }} >

                        <div className="amen_container_right">
                        <div className="indicator"></div>
                            <Image className="rounded_image" src="our_gardens_image.png" />
                    
                            </div>
                        </Col>

                        <Col className="col-lg-6 col-6" style={{borderRight: "0.5px solid #146D69",padding:"unset"}} >

                       <div className="amen_container_left">
                            
                            <Image className="rounded_image" src="our_gardens_image.png" />
                            <div className="indicator"></div>
                            </div>
                        </Col>

                        <Col className="col-lg-6 col-6" style={{ borderLeft: "0.5px solid #146D69", display: "flex", alignItems: "center" }}>
                        <p className="experience_text">Extravagant occasions</p>
                        </Col>


                    </Row>

                </div>

            </>
        )
    }
}

export default AmenitiesComponent;
