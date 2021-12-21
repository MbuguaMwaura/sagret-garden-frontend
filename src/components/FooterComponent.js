import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import './navbar.css'
import icons from '../data/icons'
import { Row, Col } from 'react-bootstrap'

class BannerComponent extends Component {



    render() {
        const socialIcons = []

        const instagram = { link: "https://www.instagram.com/sagretgardens/", icon: "instagram.png" }
        socialIcons.push(instagram)

        const facebook = { link: "https://www.facebook.com/sagretgardens/", icon: "facebook.png" }
        socialIcons.push(facebook)


        return (
            <div className="footer-container">


                <div className="large_container" style={{ padding: "2vw 0 5px 0" }}>

                    <div style={{ padding: "2vw 7vw" }}>
                        <div style={{ textAlign: "initial" }}>
                            <p className="text_size_14" style={{ fontFamily: "Optima", color: "#ffffff", fontWeight: "bold", marginBottom: "4px" }}>
                                We would love to hear from you!
                                </p>
                            <p className="text_size_11" style={{ fontFamily: "Nunito", color: "#ffffff"}}>
                                To get in touch, please contact us at:
                                </p>
                        </div>

                        <Row style={{ textAlign: "initial" }}>
                            <Col className="col-6">

                                {icons.map((icon, i) => (

                                    <a href={icon.link}  >
                                    <div style={{ display: "flex", gap: "5px", margin: "5px auto" }} key={i}>
                                        <Image src={icon.icon} style={{ width: "30px", height: "auto" }} />
                                        <p className="text_size_11" style={{ margin: "auto 0", fontFamily: "Nunito", color: "#ffffff" }}>
                                            {icon.text}
                                        </p>
                                    </div>
                                    </a>

                                ))
                                }

                            </Col>
                            <Col className="col-6">
                                <div style={{ display: "flex", gap: "5px", justifyContent: "center", marginTop: "5px", marginBottom: "20px", marginLeft: "20px", flexDirection: "column" }} >
                                    {socialIcons.map((icon, i) => (
                                        <a href={icon.link} target="_blank">
                                            <div style={{ display: "flex", gap: "5px" }} key={i}>
                                                <Image key={i} src={icon.icon} style={{ width: "30px", height: "auto" }} />
                                                <p className="text_size_11" style={{ margin: "auto 0", fontFamily: "Nunito", color: "#ffffff" }}>
                                                    Sagret Gardens
                                                </p>
                                            </div>
                                        </a>

                                    ))}
                                </div>
                            </Col>
                        </Row>

                    </div>


                </div>


            </div>
        )
    }
}

export default BannerComponent;
