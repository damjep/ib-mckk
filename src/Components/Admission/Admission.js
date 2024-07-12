import { Container, Row, Col, ListGroup, Accordion } from "react-bootstrap"
import { Modal } from "react-bootstrap"
import './styles.css'
import { useState } from "react"

export const Admission = () => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleOpen = () => setShow(true)

    return (<>
    <div className="admis-cont">
        <Container className="admission">
            <Row className="admission-div">
                <Col>
                <div>
                    <h1>Why Should You Choose Us?</h1>
                    <p style={{textAlign: 'left'}}>The International Baccalaureate Diploma Programme (IBDP) at the Malay College Kuala Kangsar (MCKK) offers a comprehensive curriculum package that develops academic potentials as well as personal and social attributes of our students. The programme allows a maximum flexibility and students can play to their strengths while maintaining a balance of subjects taken.</p>
                    <ListGroup className="admis-group">
                        <ListGroup.Item>Internationally trained academic members</ListGroup.Item>
                        <ListGroup.Item> IBDP graduates are more likely to be enrolled at top higher education institutions than entrants holding other qualifications</ListGroup.Item>
                        <ListGroup.Item> Strong international links and global partnerships </ListGroup.Item>
                        <ListGroup.Item>The 1st school under the Ministry of Education to be certified as an IB World School</ListGroup.Item>
                    </ListGroup>
                </div>
                </Col>
            </Row>

            <Row className="admission-div">
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
        
        <div className="admis-button">
            <button  title="PDF" onClick={handleOpen}>
            </button>
            <button  title="PDF">
                <a href={require("./IBDP_MCKK_Application_Form_(FILLABLE).pdf")} > Apply Now ! </a>
            </button>
            <button title="Prospectus">
                <a href={require("./Prospectus April 2020.pdf")} > View Our Prospectus </a>
            </button>
        </div>
        

        <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title> Apply by Downloading and Fill the PDF</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <object data={("./IBDP_MCKK_Application_Form_(FILLABLE).pdf")} type="application/pdf" width='100%' height='100%'>
                </object>
            </Modal.Body>
        </Modal>
    </div>
    </>)
}