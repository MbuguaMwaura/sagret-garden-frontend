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
                            <p className="text_size_14" style={{ fontFamily: "Nunito", color: "#ffffff", fontWeight: "bold", marginBottom: "4px", fontSize: "35px" }}>
                                Our Contacts
                            </p>
                            <p className="text_size_11" style={{ fontFamily: "Nunito", color: "#ffffff" ,fontWeight: "400"}}>
                                We would love to hear from you. To get in touch, please follow the links below
                            </p>
                        </div>

                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                            {icons.map((icon, i) => (

                                <a href={icon.link}  >
                                    <div key={i}>
                                        <Image src={icon.icon} style={{ width: "50px", height: "auto" }} />

                                    </div>
                                </a>

                            ))
                            }
                            {socialIcons.map((icon, i) => (
                                <a href={icon.link} target="_blank">
                                    <div key={i}>
                                        <Image key={i} src={icon.icon} style={{ width: "50px", height: "auto" }} />
                                    </div>
                                </a>

                            ))}

                        </div>



                    </div>


                </div>


            </div>
        )
    }
}

export default BannerComponent;
