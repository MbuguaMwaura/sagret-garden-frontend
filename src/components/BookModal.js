import React, { Component, useState } from 'react';
import './navbar.css'
import amenties from '../data/amenities'
import { Image, Modal, Button, Row, Col, Form } from 'react-bootstrap'
import axios from 'axios'

const formValues = { name: "", email: "", phoneNumber: "", guests: "", eventDate: "", garden: "" }

const ids = ["inputName", "inputEmail", "inputPhoneNumber", "inputGuests", "inputEventDate", "inputGarden"]



const handleInputs = (id, value) => {
    if (id === "name") {
        formValues.name = value
    } else if (id === "email") {
        formValues.email = value
    } else if (id === "phoneNumber") {
        formValues.phoneNumber = value
    } else if (id === "guests") {
        formValues.guests = value
    } else if (id === "eventDate") {
        formValues.eventDate = value
    } else if (id === "selectedGarden") {
        formValues.garden = value
    }
}
// const [ setModalShow] = useState(false);



class BookModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            validated: false
        }
    }

    handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === false) {
            this.setState({ validated: true })
        
        
        } else {
            // ids.forEach(

            //     console.log(document.getElementById("inputName").value)
            // )

            axios.post("http://localhost:8080/api/inquiry", formValues)
            .then(res => {
                if(res.status === 200){
                    this.setState({ validated: false })
                    this.props.sendDataToParent("success")
                }
            })

            

            ids.map((id) => {
                console.log(document.getElementById(id).value)
            })

        


        }

    }

    checkValidation(){
        if(!this.props.show && this.state.validated){
            this.setState({ validated: false })
        }
        return this.state.validated
    }



    render() {

        console.log(this.props)

        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered

            >
                {/* className="modal-dialog-scrollable" */}

                <div  >

                    <Row style={{ justifyContent: "space-between" }}>
                        <Col className="col-5 hidden_on_small" style={{ backgroundColor: "#ffffff", textAlign: "center", padding: "20px" }}>
                            <div style={{margin: "60px 0"}}>
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
                            </div>
                            
                        </Col>

                        <Col className="col-md-7 form_background" style={{ padding: "20px" }}>
                            <div style={{ display: "flex", gap: "20px" }}>
                                <p style={{ color: "#2a4c46", fontSize: "24px", fontFamily: "'Optima', serif", fontWeight: "bold" }}>Hello! Please tell us a little bit about your event.</p>
                                <Image src="close_modal_green.png" onClick={() => this.props.sendDataToParent("hide")} style={{ height: "18px", margin: "15px auto" }} />
                            </div>

                            <Form onSubmit={this.handleSubmit} className="needs-validation" noValidate validated={this.checkValidation()}>
                                <div className="row" style={{ marginTop: "20px" }}>
                                    <label for="inputName" className="col-md-4 col-12 col-form-label">Name :</label>
                                    <Form.Group as={Col} md="8" xs="12" controlId="inputName">

                                        <Form.Control onInput={e => handleInputs("name", e.target.value)} style={{ borderRadius: "10.25rem" }} type="text" placeholder="Enter your name" required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid name.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                </div>

                                <div className="row" style={{ marginTop: "20px" }}>
                                    <label for="inputEmail" className="col-md-4 col-12 col-form-label">Email Address :</label>

                                    <Form.Group as={Col} md="8" xs="12" controlId="inputEmail">

                                        <Form.Control onInput={e => handleInputs("email", e.target.value)} style={{ borderRadius: "10.25rem" }} type="text" placeholder="Enter your email address" required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid email address.
                                  </Form.Control.Feedback>
                                    </Form.Group>
                                </div>

                                <div className="row" style={{ marginTop: "20px" }}>
                                    <label for="inputPhoneNumber" className="col-md-4 col-12 col-form-label">Phone Number :</label>

                                    <Form.Group as={Col} md="8" xs="12" controlId="inputPhoneNumber">

                                        <Form.Control onInput={e => handleInputs("phoneNumber", e.target.value)} style={{ borderRadius: "10.25rem" }} type="text" placeholder="Enter your phone number" required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid phone number.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>

                                <div className="row" style={{ marginTop: "20px" }}>
                                    <label for="inputGuests" className="col-md-4 col-12 col-form-label">Guests Number :</label>
                                
                                    <Form.Group as={Col} md="8" xs="12" controlId="inputGuests">

                                        <Form.Control onInput={e => handleInputs("inputGuests", e.target.value)} style={{ borderRadius: "10.25rem" }} type="text" placeholder="Enter number of guests" required />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter number of guests.
                                    </Form.Control.Feedback>
                                    </Form.Group>
                                </div>

                                <div className="row" style={{ marginTop: "20px" }}>
                                    <label for="inputEventDate" className="col-md-4 col-12 col-form-label">Date of Event :</label>
            
                                    <Form.Group as={Col} md="8" xs="12" controlId="inputEventDate">

                                        <Form.Control onInput={e => handleInputs("eventDate", e.target.value)} style={{ borderRadius: "10.25rem" }} type="date" placeholder="Select event date" required />
                                        <Form.Control.Feedback type="invalid">
                                            Please select the event date.
                                    </Form.Control.Feedback>
                                    </Form.Group>                                    
                                </div>

                                <div className="row" style={{ marginTop: "20px" }}>
                                    <label for="inputGarden" className="col-md-5 col-12 col-form-label">Garden of Interest :</label>
                                    <div className="col-md-7 col-12">
                                        {/* <input type="number" className="form-control" id="inputGroupSelect" style={{borderRadius: "10.25rem"}}></input> */}
                                        <select onInput={e => handleInputs("selectedGarden", e.target.value)} className="form-select-lg" id="inputGarden" aria-label=".form-select-lg example" style={{ borderRadius: "10.25rem", width: "-webkit-fill-available", height: "35px", border: " 1px solid rgb(0 0 0 / 20%)" }}>
                                            <option selected>Select a garden...</option>
                                            <option value="A">A - Ksh 30,000</option>
                                            <option value="B">B - Ksh 20,000</option>
                                            <option value="C">C - Ksh 60,000</option>
                                            <option value="D">D - Ksh 16,000</option>
                                        </select>
                                    </div>
                                </div>
                                <div style={{ textAlign: "-webkit-right" }}>
                                    <button type="submit" className="explore_button" type="submit" style={{ margin: "13px 0", padding: "5px 30px" }}>Send</button>
                                </div>
                            </Form>
                        </Col>
                    </Row>

                </div>







            </Modal>
        );
    }
}


export default BookModal;