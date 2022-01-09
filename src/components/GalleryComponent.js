

import React from 'react';
import gallery from '../data/gallery'

import { Row, Col } from 'react-bootstrap'
export default () => {


    return (
        <React.Fragment>
            <div className="gallery-container large_container">

                <p style={{ fontFamily: "Optima", color: "#2a4c46", fontSize: "30px", fontWeight: "bold", textAlign: "center" }}>
                    Garden Views
                </p>

                <img className="rounded rounded_225" style={{ width: "100%",objectFit:"cover" }} src="gallery/three.jpg" alt="flower image" />


                <Row style={{ margin: "unset", marginTop:"8px"}}>
                    <Col className="col-4" style={{ padding: "unset", paddingRight:"8px"}} >

                    <img className="rounded rounded_110" style={{ width: "100%",objectFit:"cover" }} src="gallery/eight.jpg" alt="flower image" />
                    </Col>
                    <Col className="col-4" style={{ padding: "unset", paddingRight:"8px"}} >
                    <img className="rounded rounded_110" style={{ width: "100%",objectFit:"cover" }} src="gallery/seven.jpg" alt="flower image" />
                    </Col>
                    <Col className="col-4" style={{ padding: "unset"}}>
                    <img className="rounded rounded_110" style={{ width: "100%",objectFit:"cover" }} src="gallery/twelve.jpg" alt="flower image" />
                    </Col>
                </Row>

                <Row style={{ margin: "unset", marginTop:"8px"}}>
                    <Col className="col-8" style={{ padding: "unset", paddingRight:"8px"}} >

                    <img className="rounded rounded_225" style={{ width: "100%",objectFit:"cover" }} src="gallery/pic_11.jpg" alt="flower image" />
                    </Col>
                    <Col className="col-4" style={{ padding: "unset"}} >
                    <img className="rounded rounded_225" style={{ width: "100%",objectFit:"cover" }} src="gallery/pic_6.jpg" alt="flower image" />
                    </Col>
                    
                </Row>

                <Row style={{ margin: "unset", marginTop:"8px"}}>
                    <Col className="col-6" style={{ padding: "unset", paddingRight:"8px"}} >

                    <img className="rounded rounded_225" style={{ width: "100%",objectFit:"cover" }} src="gallery/one.jpg" alt="flower image" />
                    </Col>
                    <Col className="col-6" style={{ padding: "unset"}} >
                    <img className="rounded rounded_225" style={{ width: "100%",objectFit:"cover" }} src="gallery/pic_19.jpg" alt="flower image" />
                    </Col>
                    
                </Row>

                <img className="rounded rounded_225" style={{ width: "100%",objectFit:"cover",marginTop:"8px" }} src="gallery/garden.jpg" alt="flower image" />

            </div>


        </React.Fragment>
    );
};