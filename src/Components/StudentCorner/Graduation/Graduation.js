import { Card, Image, Container, Row, Col } from "react-bootstrap"
import { Data } from "./Alumni"

export const Graduation = () => {
    return (<>
    <div>
        <div className="d-flex m-auto">
            <Image src={require("./grad.jpg")} alt="Graduation" fluid className="m-auto"/>
        </div>
        <Alumni/>
    </div>
    </>)
}

function Alumni () {
    const data = Data()

    return (<>
    <div>
        <Container>
            <Row className="d-flex flex-column flex-lg-row gap-2 mt-3 mb-3">
                <div className="d-flex flex-sm-row flex-column gap-3">
                    {data.slice(0,3).map((item, index) => {

                    return (<>
                    <Col className="w-100">
                        <Card key={index} style={{width: 'auto'}} className="w-100 h-100">
                            <Card.Header className="w-100">
                                <Image src={require(`./assets/${item.src}`)} alt={item.name} fluid />
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>
                                    {item.name}
                                    <p>
                                        <b>{item.uni}</b>
                                        <br/>
                                        <i>{item.course}</i>
                                    </p>
                                </Card.Title>
                                <Card.Text>
                                    {item.desc}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                        </>)
                    })}
                </div>
                    
                <div className="d-flex flex-sm-row flex-column gap-3">
                    {data.slice(3,6).map((item, index) => {

                    return (<>
                        <Col className="w-100">
                            <Card key={index} style={{width: 'auto'}} className="w-100 h-100">
                                <Card.Header className="w-100">
                                    <Image src={require(`./assets/${item.src}`)} alt={item.name} fluid />
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>
                                        {item.name}
                                        <p>
                                            <b>{item.uni}</b>
                                            <br/>
                                            <i>{item.course}</i>
                                        </p>
                                    </Card.Title>
                                    <Card.Text>
                                        {item.desc}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        </>)
                    })}    
                </div>

                
                
            </Row>
        </Container>
            
        
    </div>
    </>)
}