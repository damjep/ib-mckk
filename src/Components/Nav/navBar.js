import "./nav.css";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand>IBDP MCKK</Navbar.Brand>
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link as={Link} to="/">
                                Home
                            </Nav.Link>
                            <NavDropdown>
                                <NavDropdown.Item as={Link} to="/Bog">
                                    Board of Governors
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Admin">
                                    Administration
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Teacher">
                                    Teachers
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/IbCoco">
                                IB Curriculum
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/Counselling">
                                Counselling
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/Admission">
                                Admission
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/Contact">
                                Contact
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/Achievement">
                                Achievement
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/Student">
                                Student's Corner
                            </Nav.Link>
                            <NavDropdown>
                                <NavDropdown.Item as={Link} to="/Facilities">
                                    Facilities
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Activities">
                                    Activities
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Graduation">
                                    Graduation
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};
