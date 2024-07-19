import "./nav.css";
import { Container, Navbar, Nav, NavDropdown, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import {MdMenu} from "@react-icons/all-files/md/MdMenu"
import { useState } from "react";

export const NavBar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand>IBDP MCKK</Navbar.Brand>

                    <span className="d-block d-sm-block d-md-block d-lg-none" onClick={handleOpen}>
                        <MdMenu />
                    </span>

                    <div className="d-none d-sm-none d-md-none d-lg-block ">
                        <Offcanvas show={show} onHide={handleClose} responsive="lg">
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>
                                    Navigation Menu
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                            <Navbar.Collapse className="d-block flex-lg-row">
                                <Nav className="d-flex flex-row gap-2">
                                    <Nav.Link as={Link} to="/" onClick={handleClose} id="hover">
                                        Home
                                    </Nav.Link>
                                    <NavDropdown className="mt-auto mb-auto">
                                        <NavDropdown.Item as={Link} to="/Bog" onClick={handleClose} id="hover">
                                            Board of Governors
                                        </NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/Admin" onClick={handleClose} id="hover">
                                            Administration
                                        </NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/Teacher" onClick={handleClose} id="hover">
                                            Teachers
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                
                                <Nav>
                                    <Nav.Link as={Link} to="/IbCoco" onClick={handleClose} id="hover">
                                        IB Curriculum
                                    </Nav.Link>
                                </Nav>
                                <Nav>
                                    <Nav.Link as={Link} to="/Counselling" onClick={handleClose} id="hover">
                                        Counselling
                                    </Nav.Link>
                                </Nav>
                                <Nav>
                                    <Nav.Link as={Link} to="/Admission" onClick={handleClose} id="hover">
                                        Admission
                                    </Nav.Link>
                                </Nav>
                                <Nav className="d-flex flex-row gap-2">
                                    <Nav.Link as={Link} to="/Student" onClick={handleClose} id="hover">
                                        Student's Corner
                                    </Nav.Link>
                                    <NavDropdown className="mt-auto mb-auto">
                                        <NavDropdown.Item as={Link} to="/Facilities" onClick={handleClose} id="hover">
                                            Facilities
                                        </NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/Activities" onClick={handleClose} id="hover">
                                            Activities
                                        </NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/Graduation" onClick={handleClose} id="hover">
                                            Graduation
                                        </NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/Student" onClick={handleClose} id="hover">
                                            Achievement
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Nav>
                                    <Nav.Link as={Link} to="/Contact" onClick={handleClose} id="hover">
                                        Contact
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};
