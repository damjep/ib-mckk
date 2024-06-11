import { Container, Row, Col, ListGroup, Accordion } from "react-bootstrap"

export const Admission = () => {
    return (<>
    <div>
        <Container>
            <Row>
                <Col>
                <div>
                    <h1>Why Should You Choose Us?</h1>
                    <p>The International Baccalaureate Diploma Programme (IBDP) at the Malay College Kuala Kangsar (MCKK) offers a comprehensive curriculum package that develops academic potentials as well as personal and social attributes of our students. The programme allows a maximum flexibility and students can play to their strengths while maintaining a balance of subjects taken.</p>
                    <ListGroup>
                        <ListGroup.Item>Internationally trained academic members</ListGroup.Item>
                        <ListGroup.Item> IBDP graduates are more likely to be enrolled at top higher education institutions than entrants holding other qualifications</ListGroup.Item>
                        <ListGroup.Item> Strong international links and global partnerships </ListGroup.Item>
                        <ListGroup.Item>The 1st school under the Ministry of Education to be certified as an IB World School</ListGroup.Item>
                    </ListGroup>
                </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h1>Admission Requirements</h1>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                SPM
                            </Accordion.Header>
                            <Accordion.Body>
                            7A's including English and Mathematics
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                GCE / O-Level
                            </Accordion.Header>
                            <Accordion.Body>
                                7A's 
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                                IGCSE
                            </Accordion.Header>
                            <Accordion.Body>
                                5A's 
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </Container>
        
        <button  title="PDF">
            <a href={require("./IBDP_MCKK_Application_Form_(FILLABLE).pdf")} > Apply Now ! </a>
        </button>
        <button title="Prospectus">
            <a href={require("./Prospectus April 2020.pdf")} > View Our Prospectus </a>
        </button>
    </div>
    </>)
}