import { Container, Row, Col } from "react-bootstrap"
import "./teachers.css"
import SideInfo from "./SideInfo"

export const Teacher = () => {
    return (<>
    <h4>Teachers</h4>

    <div className="w-100 h-100 d-flex flex-column gap-2 flex-sm-row mt-3">
        
        <SideInfo />

        <Container className="d-flex ">
            
            <Row className="d-flex flex-column m-auto">
                <Col className="d-flex flex-column m-auto">
                    <div className="h-auto d-flex flex-column">
                        <img src={require("./assets/NORSAFALIZA IBRAHIM.jpg")} alt="Teachers" width={"255px"} height={"277px"}/>
                        <span className="text-blue w-100 h-auto">
                            <h1>Norsafaliza Ibrahim</h1>
                        </span>
                        
                        <h4>IBDP Coordinator</h4>
                        <p>Email: <a href="mailto:ibc@mckk.edu.my">ibc@mckk.edu.my</a> </p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    </>)
}