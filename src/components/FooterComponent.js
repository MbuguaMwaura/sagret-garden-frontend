import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import './navbar.css'

class BannerComponent extends Component {

    render() {
        return (
            <div className="footer-container">
                

                <div style={{ padding: "2vw 0 2vw 0" }}>

                    <div style={{ padding: "2vw 10vw" }}>
                        <p style={{ fontFamily: "Optima", color: "#ffffff", fontSize: "16px" }}>
                            Contact info
                        </p>
                        <p style={{ fontFamily: "Nunito", color: "#ffffff", fontSize: "12px" }}>
                             For more information, please contact us at:
                        </p>
                    </div>

                    <hr style={{ margin: "10px auto", borderColor: "#dae8e7", opacity: "0.15" }} />

                </div>


            </div>
        )
    }
}

export default BannerComponent;
