import React, { Component, useState } from 'react';
import './navbar.css'
import { Image, Modal } from 'react-bootstrap'




class SuccessModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showSuccess: this.props.showSuccess
        }
    }




    render() {



        return (
            <Modal
                {...this.props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered

            >

                <div style={{ backgroundColor: "#2a4c46", textAlign: "center" }}>
                    <div style={{ display: "flex" }}>
                        <Image src="close_modal_white.png" onClick={() => this.props.sendDataToParent("hide")} style={{ height: "18px", margin: "15px 15px", visibility: "hidden" }} />
                        <Image src="sagret_garden_logo.png" style={{ height: "70px", margin: "0 auto" }} />
                        <Image src="close_modal_white.png" onClick={() => this.props.sendDataToParent("hide")} style={{ height: "18px", margin: "15px 15px" }} />
                    </div>

                    <p style={{ color: "#ffffff", margin: "20px,50px", fontSize: "14px", fontFamily: "'Nunito', serif", fontWeight: "bold" }}>Your inquiry has been successfully submitted. <br />You will also receive an email with all the details you have provided. </p>
                </div>





            </Modal>
        );
    }
}


export default SuccessModal;