import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap'

class NavBarComponent extends Component {

    render() {
        return (
            <div className="top__bar">

                <Nav  activeKey="/home" style={{display:"flex",gap:"10px",justifyContent: 'center',    alignItems: "center"}}>
                    
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
              
                <h2 className="logo">
                    Sagret Gardens
                </h2>
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
