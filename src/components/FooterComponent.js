import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import './navbar.css'
import icons from '../data/icons'
import { Row, Col } from 'react-bootstrap'

class BannerComponent extends Component {



    render() {
        const socialIcons = []

        const instagram = { link: "", icon: "instagram.png" }
        socialIcons.push(instagram)

        const twitter = { link: "", icon: "twitter.png" }
        socialIcons.push(twitter)

        const facebook = { link: "", icon: "facebook.png" }
        socialIcons.push(facebook)

        return (
            <div className="footer-container">


                <div style={{ padding: "2vw 0 5px 0" }}>

                    <div style={{ padding: "2vw 10vw" }}>

                        <Row>
                            <Col className="col-md-6 col-12">
                                <p style={{ fontFamily: "Optima", color: "#ffffff", fontSize: "16px" }}>
                                    Contact info
                                </p>
                                <p style={{ fontFamily: "Nunito", color: "#ffffff", fontSize: "12px" }}>
                                    For more information, please contact us at:
                             {icons.map((icon, i) => (
                                    <div style={{ display: "flex", gap: "10px", margin: "5px 20px" }} key={i}>
                                        <Image src={icon.icon} style={{ width: "25px", height: "auto" }} />
                                        <p style={{ margin: "auto 0", fontFamily: "Nunito", fontSize: "10px" }}>
                                            {icon.text}
                                        </p>
                                    </div>

                                ))
                                    }
                                </p>
                            </Col>
                            <Col className="col-md-6 col-12 align-self-end">
                                <div style={{ display: "flex", gap: "15px" ,justifyContent: "center", marginBottom:"20px"}} >
                                    {socialIcons.map((icon, i) => (

                                        <Image key={i} src={icon.icon} style={{ width: "40px", height: "auto" }} />

                                    ))}
                                </div>
                            </Col>
                        </Row>

                    </div>

                    <hr style={{ margin: "10px auto", borderColor: "#dae8e7", opacity: "0.15" }} />
                    <p style={{ fontFamily: "Nunito", color: "#ffffff", fontSize: "10px", textAlign: "center", margin: "unset" }}>
                        Privacy Policy &nbsp; &nbsp; &nbsp; &nbsp; Terms &amp; Conditions &nbsp; &nbsp; &nbsp; &nbsp;  Website Terms of Use &nbsp; &nbsp; &nbsp; &nbsp;  Gardens Offers
                        <br />
                        All rights reserved © 2020 Sagret Gardens &nbsp; &nbsp; &nbsp; &nbsp;   Crafted by AzawenaPro</p>
                </div>


            </div>
        )
    }
}

export default BannerComponent;
