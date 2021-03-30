import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import './navbar.css'
import { Row, Col } from 'react-bootstrap'

class GardenLayoutComponent extends Component {
    // style={{ maxWidth: "300px", objectFit: "cover", height: "350px" }}
    render() {
        return (
            <div style={{ margin: "30px 10vw" }} >
                <Row style={{ justifyContent: "space-between" }}>
                    <Col className="col-sm-7 col-12">
                        <Image src="garden_layout.jpeg" style={{ width: "inherit" }} />
                    </Col>
                    <Col className="col-sm-4 col-12" style={{textAlign:"initial"}}>
                        <p style={{ fontFamily: "Optima", color: "#1c6a5c", fontSize: "30px", fontWeight: "bold" }}>
                            Garden Layout
                        </p>
                        <p style={{ fontFamily: "Optima", color: "#1c6a5c", fontSize: "16px", marginBottom: "5px" }}>
                            GARDEN A
                        </p>
                        <p style={{ fontFamily: "Nunito", color: "#1c6a5c", fontSize: "12px" }}>
                            It is the highest garden with a capacity of up to 100 people. It is hired out at a rate of Ksh.30,000 per day.
                        </p>
                        <p style={{ fontFamily: "Optima", color: "#1c6a5c", fontSize: "16px", marginBottom: "5px" }}>
                            GARDEN B
                        </p>
                        <p style={{ fontFamily: "Nunito", color: "#1c6a5c", fontSize: "12px" }}>
                            This garden can comfortably seat 100 people. It is hired out at ash. 20,000 per day
                        </p>
                        <p style={{ fontFamily: "Optima", color: "#1c6a5c", fontSize: "16px", marginBottom: "5px" }}>
                            GARDEN C
                        </p>
                        <p style={{ fontFamily: "Nunito", color: "#1c6a5c", fontSize: "12px" }}>
                            This is the largest garden with a capacity of up to 500 people.  It is hired out at Ksh. 60,000 per day.
                        </p>
                        <p style={{ fontFamily: "Optima", color: "#1c6a5c", fontSize: "16px", marginBottom: "5px" }}>
                            GARDEN D
                        </p>
                        <p style={{ fontFamily: "Nunito", color: "#1c6a5c", fontSize: "12px" }}>
                            This is the most intimate garden with a capacity of up to 60 people. It is hired out at Ksh. 16,000 per day.
                        </p>
                        <p className="explore_button" style={{backgroundColor: "#2a4c46",padding: "8px 35px",fontSize:"14px"}}>Book Now</p>
                    </Col>
                </Row>


            </div>
        )
    }
}

export default GardenLayoutComponent;
