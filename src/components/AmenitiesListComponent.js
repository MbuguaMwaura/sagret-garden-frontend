import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import './navbar.css'
import amenties from '../data/amenitiesOne'
import amentiesTwo from '../data/amenitiesTwo'
import { Row, Col } from 'react-bootstrap'

class AmentiesListComponent extends Component {
    render() {
        return (
            <>
                <Row style={{ marginRight: "unset", marginLeft: "unset" }}>

                    <Col style={{ paddingBottom: "20px" }} className="col-6">
                    {amenties.map((amenity, i) => (
                    <div style={{ display: "flex", gap: "10px", margin: "5px 0" }} key={i}>
                        <Image src={amenity.icon} style={{ width: "40px", height: "auto" }} />
                        <p style={{ margin: "auto 0", fontFamily: "Nunito", fontSize: "11px", textAlign: "left", color: "#2a4c46", fontWeight: "bold" }}>
                            {amenity.text}
                        </p>
                    </div>

                ))
                }
                    </Col>
                    <Col className="col-6" >
                    {amentiesTwo.map((amenity, i) => (
                    <div style={{ display: "flex", gap: "10px", margin: "5px 0" }} key={i}>
                        <Image src={amenity.icon} style={{ width: "40px", height: "auto" }} />
                        <p style={{ margin: "auto 0", fontFamily: "Nunito", fontSize: "11px", textAlign: "left", color: "#2a4c46", fontWeight: "bold" }}>
                            {amenity.text}
                        </p>
                    </div>

                ))
                }
                    </Col>

                </Row>

            </>
        )
    }
}

export default AmentiesListComponent;
