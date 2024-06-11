import { Card, Container, Row, Col } from "react-bootstrap"
import {FaMedapps} from "@react-icons/all-files/fa/FaMedapps"
import { SideBar } from "../sidebar"

export const About = () => {
    return (<>
    <SideBar />
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card >
                            <Card.Header>
                                <Card.Img as={FaMedapps} variant="top" size={50} />
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>Mission</Card.Title>
                                <Card.Text>The MCKK IB Diploma Programme aims to develop students of character who will be independent lifelong learners, in keeping with the college’s quest for overall excellence in producing responsible leaders who uphold traditional values and national aspirations, towards creating a productive and peaceful global future</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Img as={FaMedapps} variant="top" size={50} />
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>What Is IBDP Programme ?</Card.Title>
                                <Card.Text>The International Baccalaureate or IB Diploma Programme (DP) is recognised by the most prestigious universities in the world and is aimed at students aged 16-19. Its main objective is to help students acquire breadth and depth of knowledge, allowing them to become intellectually and emotionally prepared in order to build a better world. The DP is based on research, concept understanding, teamwork and efficient cooperation. It develops in local and global contexts, is aimed towards meeting all students’ needs and follows a formative and summative assessment.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Img as={FaMedapps} variant="top" size={50} />
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>IB Principles</Card.Title>
                                <Card.Text>
                                    <p>
                                    IB fosters intercultural understanding and respect, not at as an alternative to the sense of national and cultural identity, but as a main aspect of life in the 21st century. All these goals are picked up in their statement of principles:
                                    </p>

                                    <ul>
                                        <li>The International Baccalaureate aims to develop supportive, well-rounded and knowledgeable learners who, recognising their common humanity and shared guardianship of the planet, help to create a better and more peaceful world.</li>
                                        <li>To reach this goal, the organisation works hand-in-hand with schools, governments and international organisations to create and develop challenging international education programmes and a rigorous assessment methodology.</li>
                                    </ul>

                                    <p>
                                    These programmes encourage students from all over the world to adopt an active learning attitude throughout their whole lives, to be compassionate and to accept the opinion of others despite their differences.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    </>)
}