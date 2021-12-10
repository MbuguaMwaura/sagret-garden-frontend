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

                <div style={{ backgroundColor: "#2a4c46" , paddingBottom:"16px"}} >


                    <div style={{ margin: "auto 10vw" }} >
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
                                            This garden has a capacity of up to 200 people. It is hired out at a rate of Ksh.30,000 per day.
                                        </p>
                                    </Col>
                                    <Col>
                                        <p className="layout_title">
                                            GARDEN B
                                        </p>
                                        <p className="layout_description">
                                            This garden can comfortably seat 100 people. It is hired out at ash. 20,000 per day.
                                        </p>
                                    </Col>


                                </Row>

                                <Row>
                                    <Col>
                                        <p className="layout_title">
                                            GARDEN C
                                        </p>
                                        <p className="layout_description">
                                            This is the largest garden with a capacity of up to 500 people.  It is hired out at
                                            Ksh. 60,000 per day.
                                        </p>
                                    </Col>
                                    <Col>
                                        <p className="layout_title">
                                            GARDEN D
                                        </p>
                                        <p className="layout_description">
                                            This is the most intimate garden with a capacity of up to 60 people. It is hired out at Ksh. 16,000 per day.
                                        </p>
                                    </Col>


                                </Row>

                                <p onClick={() => this.props.book()} className="explore_button">Book Now</p>
                            </Col>
                        </Row>


                    </div>
                </div>

                <div style={{display: "flex",flexDirection: "column"}}>
                    <p style={{ marginTop: "10px", width: "100%", textAlign: "center", fontFamily: "Optima", color: "#1c6a5c", fontSize: "20px", fontWeight: "bold" }}>
                        Where are we?
                    </p>
                    <Image src="location.png" style={{ width: "inherit", maxHeight: "350px" }} />
                    <p style={{ textAlign: "left", fontFamily: "Nunito", color: "#2a4c46", fontSize: "11px", fontWeight: "bold",margin:"auto 32px",lineHeight:"20px" }}>
                     We are strategically located along Kiambu Road, one minute drive behind Quickmart in Thindigua. This place is easily accessible to all. We also provide ample parking right next to the garden.
                    </p>
                </div>
            </>
        )
    }
}

export default GardenLayoutComponent;
