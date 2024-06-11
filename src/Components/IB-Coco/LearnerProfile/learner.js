import { Card, Carousel, Col, Container, Row } from "react-bootstrap"
import { SideBar } from "../sidebar"

export default function LearnerProfile() {
    return (<>
    <SideBar />
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <video src={require("./assets/lp.mp4")} controls></video>
                            </Card.Header>

                            <Card.Body>
                                <Card.Title>Learner Profile</Card.Title>
                                <Card.Subtitle>
                                The International Baccalaureate learner profile describes a broad range of human capacities and responsibilities that go beyond academic success
                                </Card.Subtitle>
                                <Card.Body>
                                    <p>
                                    They imply a commitment to help all members of the school community learn to respect themselves, others and the world around them.
                                    </p>
                                    <p>
                                    Each of the IB's programs are committed to the development of students according to the IB learner profile:
                                    </p>
                                    <p>
                                    The profile aims to develop learners who are;
                                    </p>
                                    <ul>
                                        <li>Inquirers</li>
                                        <li>Knowledgeable</li>
                                        <li>Thinkers</li>
                                        <li>Communicators</li>
                                        <li>Principled</li>
                                        <li>Open-minded</li>
                                        <li>Caring</li>
                                        <li>Risk-takers</li>
                                        <li>Balanced</li>
                                        <li>Reflective</li>
                                    </ul>
                                </Card.Body>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Carousel>
                            <Carousel.Item>
                                <img src={require("./assets/inquirers.jpg")} alt="LP"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={require("./assets/knowledgeable.jpg")} alt="LP"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={require("./assets/balanced.jpg")} alt="LP"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={require("./assets/caring.jpg")} alt="LP"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={require("./assets/communicators.jpg")} alt="LP"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={require("./assets/openminded.jpg")} alt="LP"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={require("./assets/principled.jpg")} alt="LP"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={require("./assets/reflective.jpg")} alt="LP"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={require("./assets/risktakers.jpg")} alt="LP"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={require("./assets/thinkers.jpg")} alt="LP"/>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>

            
        </div>
    </>)
}