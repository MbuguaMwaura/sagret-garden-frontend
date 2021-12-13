

import React from 'react';
import gallery from '../data/gallery'

import { Row, Col } from 'react-bootstrap'
export default () => {


    return (
        <React.Fragment>
            <div className="gallery-container">

                <p style={{ fontFamily: "Optima", color: "#2a4c46", fontSize: "20px", fontWeight: "bold", textAlign: "center" }}>
                    Garden Views
                </p>

                <img className="rounded" style={{ width: "100%",height:"200px",objectFit:"cover" }} src="gallery/three.jpg" alt="flower image" />


                <Row style={{ margin: "unset", marginTop:"8px"}}>
                    <Col className="col-4" style={{ padding: "unset", paddingRight:"8px"}} >

                    <img className="rounded" style={{ width: "100%",height:"110px",objectFit:"cover" }} src="gallery/four.jpg" alt="flower image" />
                    </Col>
                    <Col className="col-4" style={{ padding: "unset", paddingRight:"8px"}} >
                    <img className="rounded" style={{ width: "100%",height:"110px",objectFit:"cover" }} src="gallery/seven.jpg" alt="flower image" />
                    </Col>
                    <Col className="col-4" style={{ padding: "unset"}}>
                    <img className="rounded" style={{ width: "100%",height:"110px",objectFit:"cover" }} src="gallery/six.jpg" alt="flower image" />
                    </Col>
                </Row>

                <Row style={{ margin: "unset", marginTop:"8px"}}>
                    <Col className="col-8" style={{ padding: "unset", paddingRight:"8px"}} >

                    <img className="rounded" style={{ width: "100%",height:"225px",objectFit:"cover" }} src="gallery/nine.jpg" alt="flower image" />
                    </Col>
                    <Col className="col-4" style={{ padding: "unset"}} >
                    <img className="rounded" style={{ width: "100%",height:"225px",objectFit:"cover" }} src="gallery/ten.jpg" alt="flower image" />
                    </Col>
                    
                </Row>
            </div>


        </React.Fragment>
    );
};