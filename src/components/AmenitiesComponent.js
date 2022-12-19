import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import './navbar.css'
import { Row, Col } from 'react-bootstrap'
import AmentiesListComponent from './AmenitiesListComponent'

class AmenitiesComponent extends Component {
    render() {
        return (
            <>


                <div style={{ backgroundColor: "#2a4c46", maxWidth: "1040px", margin: "0 auto", minHeight: "250px" }}>
                    <Row style={{ padding: "20px", margin: "unset" }}>
                        <Col className="col-6">
                            <p style={{ paddingTop: "24px", textAlign: "start", fontFamily: "Nunito", color: "#ffffff", fontSize: "30px", fontWeight: "bold", maxWidth: "600px" }}>
                                Sagret Garden Amenities
                            </p>
                            <p className="text_size_11" style={{ paddingTop: "24px", paddingBottom: "24px", fontFamily: "Nunito", color: "#ffffff", textAlign: "end", fontWeight: "bold", lineHeight: "30px", textAlign: "start" }}>
                                We are not just a garden, we are a little slice of eden. To ensure the comfort and relaxation of all our guests. Sagret Gardens has incorporated a variety of amenities and services.
                            </p>
                        </Col>
                        

                    </Row>
                </div>
                <div className="large_container" style={{ marginTop: "-80px", marginBottom: "70px" }}>

                    <Row style={{ marginRight: "unset", marginLeft: "unset" }}>


                        <Col className="col-6" style={{ margin: "auto" }}>

                            <div className="hidden_on_small" >
                                <AmentiesListComponent />
                            </div>


                        </Col>
                        <Col className="col-6">
                            <Image src="choma.jpg" style={{ height: "490px", width: "435px", objectFit: "cover", borderRadius: "25px", filter: "drop-shadow(7px 7px 11px rgba(0, 0, 0, 0.4))" }} />
                        </Col>
                    </Row>


                    <Row className="hidden_on_large" style={{ marginRight: "unset", marginLeft: "unset" }}>

                        <Col style={{ paddingBottom: "20px" }} className="col-lg-6 col-12">
                            <AmentiesListComponent />

                        </Col>


                    </Row>

                </div>
                <div className="gone_on_largest" style={{ backgroundColor: "#2a4c46", marginTop: "10px", flexDirection: "column", alignItems: "center", paddingLeft: "10px", paddingRight: "10px", paddingBottom: "24px" }} >

                    <div style={{ alignItems: "center", display: "flex", flexDirection: "column" }}>
                        <p className="inclusive_title" style={{ marginTop: "50px",fontWeight:"700" }}>The Sagret Experience</p>

                        <p className="text_size_12" style={{ marginTop: "20px",color:"white",fontWeight:"700",fontSize:"12px" }}>Event planning has never been simpler. Enjoy our unique fully customisable food and decor packages for all occasions. </p>
                    </div>


                    <Row style={{ marginRight: "unset", marginLeft: "unset" }}>

                        <Col className="col-lg-6 col-6" style={{ borderRight: "0.5px solid #146D69", padding: "unset" }} >
                            <div className="amen_container_left">

                                <Image className="rounded_image" src="gallery/pic_17.jpg" />

                            </div>


                        </Col>

                        <Col className="col-lg-6 col-6" style={{ borderLeft: "0.5px solid #146D69", display: "flex", alignItems: "center" }}>
                            <p className="experience_text text_size_16">Intimate Dates</p>
                        </Col>

                        <Col className="col-lg-6 col-6" style={{ borderLeft: "0.5px solid #146D69", padding: "unset" }} >

                            <div className="amen_container_right">

                                <Image className="rounded_image" src="gallery/pic_15.jpg" />

                            </div>
                        </Col>
                        <Col className="col-lg-6 col-6" style={{ justifyContent: "flex-end", borderRight: "0.5px solid #146D69", display: "flex", alignItems: "center" }}>
                            <p className="experience_text text_size_16">Special Occasions</p>
                        </Col>


                        <Col className="col-lg-6 col-6" style={{ borderRight: "0.5px solid #146D69", padding: "unset" }} >

                            <div className="amen_container_left">

                                <Image className="rounded_image" src="gallery/pic_13.jpg" />

                            </div>
                        </Col>

                        <Col className="col-lg-6 col-6" style={{ borderLeft: "0.5px solid #146D69", display: "flex", alignItems: "center" }}>
                            <p className="experience_text text_size_16">Extravagant occasions</p>
                        </Col>


                    </Row>

                </div>

                <div className="largest_only" style={{ backgroundColor: "#2a4c46", marginTop: "10px", flexDirection: "column", alignItems: "center", paddingLeft: "10px", paddingRight: "10px", paddingBottom: "24px" }} >
                    <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
                        <div style={{ alignItems: "center", display: "flex", flexDirection: "column" }}>
                            <p className="inclusive_title" style={{ marginTop: "50px",fontWeight:"700" }}>The Sagret Experience</p>
                            <p className="text_size_12" style={{ marginTop: "20px",color:"white",fontWeight:"700",fontSize:"12px" }}>Event planning has never been simpler. Enjoy our unique fully customisable food and decor packages for all occasions. </p>
                        </div>


                        <Row style={{ marginRight: "unset", marginLeft: "unset" }}>

                            <Col className="col-lg-4 col-4" style={{ padding: "unset" }} >
                                <div className="amen_container_left">

                                    <Image className="rounded_image" src="gallery/pic_17.jpg" />

                                    <p className="experience_text text_size_16">Intimate Dates</p>
                                </div>


                            </Col>


                            <Col className="col-lg-4 col-4" style={{ padding: "unset" }} >

                                <div className="amen_container_right">

                                    <Image className="rounded_image" src="gallery/pic_15.jpg" />
                                    <p className="experience_text text_size_16">Special Occasions</p>

                                </div>
                            </Col>

                            <Col className="col-lg-4 col-4" style={{ padding: "unset" }} >

                                <div className="amen_container_left">

                                    <Image className="rounded_image" src="gallery/pic_13.jpg" />

                                    <p className="experience_text text_size_16">Extravagant occasions</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

            </>
        )
    }
}

export default AmenitiesComponent;
