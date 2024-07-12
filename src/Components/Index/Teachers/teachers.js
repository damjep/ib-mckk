import { Container, Row, Col } from "react-bootstrap"
import "./teachers.css"
import SideInfo from "./SideInfo"

export const Teacher = () => {
    return (<>
    <div>
        <SideInfo />
        <Container>
            <h4>Teachers</h4>
            <Row>
                <Col>
                    <div className="t-1">
                        <img src={require("./assets/NORSAFALIZA IBRAHIM.jpg")} alt="Teachers" width={"255px"} height={"277px"}/>
                        <span className="text-blue">
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