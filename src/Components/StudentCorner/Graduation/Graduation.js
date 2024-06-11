import { Card, Image, Container, Row, Col } from "react-bootstrap"
import { Data } from "./Alumni"

export const Graduation = () => {
    return (<>
    <div>
        <div>
            <Image src={require("./grad.jpg")} alt="Graduation" fluid/>
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
            <Row>
                <Col>
                </Col>
            </Row>
            <Row md={3}>
                    {data.map((item, index) => {

                    return (<>
                    <Col >
                        <Card key={index} style={{width: 'auto'}}>
                            <Card.Header>
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
                
            </Row>
        </Container>
            
        
    </div>
    </>)
}