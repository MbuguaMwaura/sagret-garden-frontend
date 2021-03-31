import React, { Component } from 'react';
import './navbar.css'
import amenties from '../data/amenities'
import { Image, Modal, Button, Row, Col } from 'react-bootstrap'




function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
      
        >
      {/* className="modal-dialog-scrollable" */}

            <div >

                <Row style={{ justifyContent: "space-between" }}>
                    <Col className="col-5 hidden_on_small" style={{ backgroundColor: "#ffffff", textAlign: "center", padding: "20px" }}>
                        <Image src="sagret_garden_logo.png" style={{ height: "70px", margin: "0 auto" }} />
                        <p style={{ color: "#2a4c46", fontSize: "30px", fontFamily: "'Kurale', serif" }}>Sagret Gardens</p>

                        <div style={{ textAlign: "initial", width: "150px", margin: "0 auto" }}>
                            <p style={{ color: "#2a4c46", fontSize: "16px", fontFamily: "'Optima', serif", fontWeight: "bold" }}>
                                Why Our Gardens?
                            </p>
                            <p style={{ color: "#2a4c46", fontSize: "14px", fontFamily: "'Nunito', serif", fontWeight: "normal" }}>
                                Our grass is always green.
                            </p>

                            <p style={{ color: "#2a4c46", fontSize: "14px", fontFamily: "'Nunito', serif", fontWeight: "normal" }}>
                                Our flowers are always in bloom.
                            </p>

                            <p style={{ color: "#2a4c46", fontSize: "14px", fontFamily: "'Nunito', serif", fontWeight: "normal" }}>
                                We offer great value for money.
                            </p>
                        </div>
                    </Col>

                    <Col className="col-md-7 form_background"  style={{ padding: "20px" }}>
                    <p style={{ color: "#2a4c46", fontSize: "24px", fontFamily: "'Optima', serif",fontWeight: "bold" }}>Hello! Please tell us a little bit about your event.</p>
                    
                    <div className="row" style={{ marginTop:"20px"} }>
                        <label for="inputPassword" className="col-md-3 col-12 col-form-label">Name :</label>
                        <div className="col-md-9 col-12"> 
                         <input type="text" className="form-control" id="inputPassword" style={{borderRadius: "10.25rem"}}></input>
                        </div>
                    </div>

                    <div className="row" style={{ marginTop:"20px"} }>
                        <label for="inputPassword" className="col-md-4 col-12 col-form-label">Email Address :</label>
                        <div className="col-md-8 col-12"> 
                         <input type="text" className="form-control" id="inputPassword" style={{borderRadius: "10.25rem"}}></input>
                        </div>
                    </div>

                    <div className="row" style={{ marginTop:"20px"} }>
                        <label for="inputPassword" className="col-md-4 col-12 col-form-label">Phone Number :</label>
                        <div className="col-md-8 col-12"> 
                         <input type="text" className="form-control" id="inputPassword" style={{borderRadius: "10.25rem"}}></input>
                        </div>
                    </div>

                    <div className="row" style={{ marginTop:"20px"} }>
                        <label for="inputPassword" className="col-md-5 col-12 col-form-label">Number of Guests :</label>
                        <div className="col-md-7 col-12"> 
                         <input type="number" className="form-control" id="inputPassword" style={{borderRadius: "10.25rem"}}></input>
                        </div>
                    </div>

                    <div className="row" style={{ marginTop:"20px"} }>
                        <label for="inputPassword" className="col-md-4 col-12 col-form-label">Date of Event :</label>
                        <div className="col-md-8 col-12"> 
                         <input type="date" className="form-control" id="inputPassword" style={{borderRadius: "10.25rem"}}></input>
                        </div>
                    </div>

                    <div className="row" style={{ marginTop:"20px"} }>
                        <label for="inputGroupSelect" className="col-md-5 col-12 col-form-label">Garden of Interest :</label>
                        <div className="col-md-7 col-12"> 
                         {/* <input type="number" className="form-control" id="inputGroupSelect" style={{borderRadius: "10.25rem"}}></input> */}
                         <select className="form-select-lg" id="inputGroupSelect"   aria-label=".form-select-lg example" style={{borderRadius: "10.25rem",    width: "-webkit-fill-available",height: "35px"}}>
                            <option selected>Select a garden...</option>
                            <option value="A">A - Ksh 30,000</option>
                            <option value="B">B - Ksh 20,000</option>
                            <option value="C">C - Ksh 60,000</option>
                            <option value="D">D - Ksh 16,000</option>
                        </select>
                        </div>
                    </div>
                    <div style={{textAlign:"-webkit-right"}}>
                        <p className="explore_button" style={{ margin: "13px 0",padding: "5px 30px"}}>Submit</p>
                    </div>
                   
                    </Col>
                </Row>

            </div>

        </Modal>
    );
}


export default MyVerticallyCenteredModal;