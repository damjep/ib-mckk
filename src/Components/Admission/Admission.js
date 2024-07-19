import { Container, Row, Col, ListGroup, Accordion } from "react-bootstrap"
import { Modal } from "react-bootstrap"
import './styles.css'
import { useState } from "react"
import { Viewer } from "@react-pdf-viewer/core"
import { Worker } from "@react-pdf-viewer/core"
import { ScrollMode } from "@react-pdf-viewer/core"
import { SpecialZoomLevel } from "@react-pdf-viewer/core"

export const Admission = () => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleOpen = () => setShow(true)

    const [show2, setShow2] = useState(false)
    const handleClose2 = () => setShow2(false)
    const handleOpen2 = () => setShow2(true)

    return (<>
    <div className="admis-cont mt-3 mb-3">
        <Container className="admission  d-flex flex-column flex-sm-row w-100 mb-3">
            <Row className="admission-div w-100">
                <Col>
                <div>
                    <h1>Why Should You Choose Us?</h1>
                    <p style={{textAlign: 'left'}} className="w-100">The International Baccalaureate Diploma Programme (IBDP) at the Malay College Kuala Kangsar (MCKK) offers a comprehensive curriculum package that develops academic potentials as well as personal and social attributes of our students. The programme allows a maximum flexibility and students can play to their strengths while maintaining a balance of subjects taken.</p>
                    <ListGroup className="w-100">
                        <ListGroup.Item className="w-100">Internationally trained academic members</ListGroup.Item>
                        <ListGroup.Item className="w-100"> IBDP graduates are more likely to be enrolled at top higher education institutions than entrants holding other qualifications</ListGroup.Item>
                        <ListGroup.Item className="w-100"> IBDP graduates are more likely to be enrolled at top higher education institutions than entrants holding other qualifications</ListGroup.Item>
                        <ListGroup.Item className="w-100"> Strong international links and global partnerships </ListGroup.Item>
                        <ListGroup.Item className="w-100"> The 1st school under the Ministry of Education to be certified as an IB World School</ListGroup.Item>
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
        
        <div className="admis-button d-flex flex-column flex-sm-row">
            <button  title="PDF" onClick={handleOpen} className="w-75">
                View Application Form
            </button>
            
            <button title="Prospectus" onClick={handleOpen2} className="w-75">
            View Our Prospectus 
            </button>
        </div>
        

        <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton >
                <Modal.Title> Apply by Downloading and Fill the PDF</Modal.Title>
                <Modal.Body>
                    <button  title="PDF">
                        <a href={require("./IBDP_MCKK_Application_Form_(FILLABLE).pdf")} target="_blank" rel="noreferrer"> Download </a>
                    </button>
                </Modal.Body>
            </Modal.Header>

            <Modal.Body>
                <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
                    <Viewer fileUrl={require("./IBDP_MCKK_Application_Form_(FILLABLE).pdf")} 
                    defaultScale={SpecialZoomLevel.PageFit} scrollMode={ScrollMode.Vertical} pageLayout={'pageIndex'}
                    />
                </Worker>
            </Modal.Body>
        </Modal>

        <Modal size="lg" show={show2} onHide={handleClose2}>
            <Modal.Header closeButton >
                <Modal.Title> IBDP MCKK Prospectus</Modal.Title>
                <Modal.Body>
                    <button title="Prospectus">
                        <a href={require("./Prospectus April 2020.pdf")} target="_blank" rel="noreferrer">Download</a>
                    </button>
                </Modal.Body>
            </Modal.Header>

            <Modal.Body>
                <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
                    <Viewer fileUrl={require("./Prospectus April 2020.pdf")} 
                    defaultScale={SpecialZoomLevel.PageFit} scrollMode={ScrollMode.Vertical}
                    />
                </Worker>
            </Modal.Body>
        </Modal>
    </div>
    </>)
}