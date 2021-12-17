import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import './navbar.css'
import { Row, Col } from 'react-bootstrap'

class GardenLayoutComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>

                <div style={{ backgroundColor: "#2a4c46" , paddingBottom:"30px"}} >


                    <div style={{ margin: "auto", maxWidth:"600px" }} >
                        <div style={{ margin: "auto 5vw"}}>
                            <Row style={{ justifyContent: "space-between" }}>

                            <p style={{ marginTop: "10px", width: "100%", textAlign: "center", fontFamily: "Optima", color: "#ffffff", fontSize: "20px", fontWeight: "bold" }}>
                                Garden Layout
                            </p>
                            <Col className="col-12">
                                <Image src="garden_layout.png" style={{ width: "inherit", maxHeight: "350px" }} />

                            </Col>
                            <Col className="col-12" style={{ textAlign: "initial" }}>

                                <Row style={{ marginTop: "24px" }}>
                                    <Col>
                                        <p className="layout_title">
                                            GARDEN A
                                        </p>
                                        <p className="layout_description">
                                        Our most popular garden with a capacity of up to 200 people. It is hired out at a rate of Ksh.35,000 per day for private events and Ksh.50,000 for public events.
                                        </p>
                                    </Col>
                                    <Col>
                                        <p className="layout_title">
                                            GARDEN B
                                        </p>
                                        <p className="layout_description">
                                        Our most floral garden that comfortably seats 100 people. It is hired out at ash. 20,000 per day for private events and Ksh.30,000 for public events
                                        </p>
                                    </Col>


                                </Row>

                                <Row>
                                    <Col>
                                        <p className="layout_title">
                                            GARDEN C
                                        </p>
                                        <p className="layout_description">
                                        The largest garden with a capacity of up to 500 people.  It is hired out at Ksh.60,000 per day for private events and Ksh.80,000 for public events.
                                        </p>
                                    </Col>
                                    <Col>
                                        <p className="layout_title">
                                            GARDEN D
                                        </p>
                                        <p className="layout_description">
                                        The most intimate garden that accommodates up to 60 people. It is hired out at Ksh. 20,000 per day for private events and Ksh. 30,000 for public events.
                                        </p>
                                    </Col>


                                </Row>
                                
                                <a href="tel:+254715398758" className="explore_button">Book Now</a>
                            </Col>
                        </Row>
                        </div>

                    </div>
                </div>

                <div style={{display: "flex",flexDirection: "column"}}>
                    <p style={{ margin: "16px auto", width: "100%", textAlign: "center", fontFamily: "Optima", color: "#1c6a5c", fontSize: "20px", fontWeight: "bold" }}>
                        Where are we?
                    </p>
                    <iframe
                        height="450"
                        frameborder="0" style={{border:"0"}}
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCNsmgorp06P8qYILkWucOMFerRWAhguRQ&q=Sagret+Gardens,Kiambu+Kenya&zoom=16" allowfullscreen>
                        </iframe>
                        
                    <p style={{ textAlign: "left", fontFamily: "Nunito", color: "#2a4c46", fontSize: "11px", fontWeight: "bold",margin:"24px 32px",lineHeight:"20px" }}>
                    We are strategically located along Kiambu Road, a 1 minute drive or 3 minute walk behind Quickmart in Thindigua. This place is easily accessible to all. We also provide ample parking right next to the garden.
                    </p>
                </div>
            </>
        )
    }
}

export default GardenLayoutComponent;
