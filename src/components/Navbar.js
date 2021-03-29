import React, { Component } from 'react';
import { Navbar, Nav,Image } from 'react-bootstrap'
import './navbar.css'

class NavBarComponent extends Component {
    render() {
        return (
            <div className="container">

                <Nav  activeKey="/home" style={{display:"flex",gap:"20px",justifyContent: 'center',    alignItems: "center"}}>
                    
                <Nav.Item >
                        <Nav.Link className="nav_style" href="/home">ABOUT US</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link  className="nav_style" eventKey="link-1">OUR GARDENS</Nav.Link>
                    </Nav.Item>
           
            
                    <Image src="sagret_garden_logo.png" style={{height:"70px",margin:"0 100px"}}  />

                    <Nav.Item>
                        <Nav.Link  className="nav_style" href="/home">AMENITIES</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link   className="nav_style" eventKey="link-1">BOOK NOW</Nav.Link>
                    </Nav.Item>
                    
                </Nav>
                {/* <Navbar collapseOnSelect expand="lg" >
                    <Navbar.Brand href="#home">Sagret Gardens</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Item>
                                <Nav.Link href="/home">Active</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1">Link</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2">Link</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="disabled" disabled>
                                    Disabled
                         </Nav.Link>
                            </Nav.Item>


                        </Nav>
                    
                    </Navbar.Collapse>
                </Navbar> */}
            </div>
        )
    }
}

export default NavBarComponent;
