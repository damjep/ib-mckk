import { Card, Carousel, Col, Container, Row } from "react-bootstrap"
import { SideBar } from "../sidebar"
import './learner.css'

export default function LearnerProfile() {
    return (<>
    <SideBar />
        <div className="learner-main">

                <div className="learner-card">
                <Card>
                    <Card.Header>
                        <video src={require("./assets/lp.mp4")} autoPlay controls ></video>

                        <Card.Title>Learner Profile</Card.Title>
                        <Card.Subtitle style={{textAlign: 'left'}}>
                        The International Baccalaureate learner profile describes a broad range of human capacities and responsibilities that go beyond academic success
                        </Card.Subtitle>
                    </Card.Header>

                    <Card.Body style={{textAlign: 'left'}}>
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
                </Card>
                </div>

                <Carousel className="learner-carousel" data-bs-theme="dark">
                    <Carousel.Item>
                        <img src={require("./assets/inquirers.jpg")} alt="LP"/>
                        <Carousel.Caption>
                            Inquirer
                        </Carousel.Caption>
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

            
        </div>
    </>)
}