import { Accordion, Col, Container, Row } from "react-bootstrap"
import { Data } from "./CohortAlumni"
import './styles.css'

export const Achievement = () => {
    return (<>
    <div className="achieve-cont d-flex flex-column flex-sm-row w-100 mt-5 min-vh-50" id="Achievement">
        <div className="achieve-div d-flex flex-column w-100">
            <h1>Our Achievement</h1>
            <img src={require("./Result 2022.jpeg")} alt="Achievements" className="img w-100" width='90%'/>
        </div>

        <div className="achieve-div d-flex flex-column w-100">
            <HighAchievers />
        </div>
    </div>
    
    </>)
}

function HighAchievers() {
    const CohortAlumni = Data();

    return (<>
    <div>
        <h1>Our High Achievers</h1>
        <div>
            <Accordion>
                {CohortAlumni.map((item, index) => {
                    return (<>
                        <Accordion.Item key={index} eventKey={index}>
                            <Accordion.Header>
                                    Cohort {String(item.cohort)}
                            </Accordion.Header>
                            <Accordion.Body>
                                <Container>
                                    <Row >
                                        {item.data.map((i, d) => {
                                            return (<>
                                                <Col key={d} md={item.md}>
                                                    <div>
                                                        <img src={require(`./Alumni/${i.id}/${i.src}`)} alt="C7" width={"50%"} />
                                                        <h4>{i.name}</h4>
                                                        <p>
                                                            {i.grade} / 45
                                                        </p>
                                                    </div>
                                                </Col>
                                            </>)
                                        })}
                                    </Row>
                                </Container>
                            </Accordion.Body>
                        </Accordion.Item>
                    </>)
                })}
            </Accordion>
        </div>
    </div>
    </>)
}