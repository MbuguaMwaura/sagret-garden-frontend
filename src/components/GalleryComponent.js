

import React from 'react';
import gallery from '../data/gallery'

import { Row, Col } from 'react-bootstrap'
export default () => {


    return (
        <React.Fragment>
            <div>

                <p style={{ fontFamily: "Nunito", color: "#2a4c46", fontSize: "30px", fontWeight: "bold", textAlign: "center",marginTop:"18px" }}>
                    Garden Views
                </p>



                <img style={{ height:"750px",width: "100%",objectFit:"cover",marginTop:"8px",marginBottom:"30px" }} src="gallery/garden.jpg" alt="flower image" />

       
                    <Row>
                        <Col style={{height:"187px"}}><img style={{ width: "100%",objectFit:"cover",height:"-webkit-fill-available",borderRadius:"15px" }} src="gallery/pic_19.jpg" alt="flower image" /></Col>
                        <Col style={{height:"187px"}}><img style={{ width: "100%",objectFit:"cover",height:"-webkit-fill-available",borderRadius:"15px" }} src="gallery/one.jpg" alt="flower image" /></Col>
                        <Col style={{height:"187px"}}><img style={{ width: "100%",objectFit:"cover",height:"-webkit-fill-available",borderRadius:"15px" }} src="gallery/pic_11.jpg" alt="flower image" /></Col>
                        <Col style={{height:"187px"}}><img style={{ width: "100%",objectFit:"cover",height:"-webkit-fill-available",borderRadius:"15px" }} src="gallery/seven.jpg" alt="flower image" /></Col>
                        <Col style={{height:"187px"}}><img style={{ width: "100%",objectFit:"cover",height:"-webkit-fill-available",borderRadius:"15px" }} src="gallery/pic_6.jpg" alt="flower image" /></Col>
                    </Row>
                    
                    
            </div>


        </React.Fragment>
    );
};