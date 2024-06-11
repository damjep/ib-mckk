import { Container, Row, Col } from "react-bootstrap"
import { FaRegUser } from "@react-icons/all-files/fa/FaRegUser";

export const Admin = () => {
    return (<>
    <div>
        <Container>
            <Row>
                <Col>
                    <div>
                        <img src={require("./assets/HM.jpg")} width={"255px"} height={"277px"} alt="Principal"/>
                        <h1>Mohd Shahadan bin Abd Rahman</h1>
                        <h4>Principal</h4>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div>
                        <img src={require("./assets/KHAINURI.jpg")} width={"255px"} height={"277px"} alt="Admin"/>
                        <h1>Khainuri Bin Hanafiah</h1>
                        <h4>Senior Assistant of Administration</h4>
                    </div>
                </Col>
                <Col>
                    <div>
                        <FaRegUser size={290} />
                        <h1>Vacant</h1>
                        <h4>Senior Assistant of Student's Affair</h4>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div>
                        <img src={require("./assets/Rabiatul.jpg")} width={"255px"} height={"277px"} alt="Admin"/>
                        <h1>Rabiatul Adwiah Binti Pathil</h1>
                        <h4>Senior Assistant of Co-Curricular</h4>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={require("./assets/Rabiatul.jpg")} width={"255px"} height={"277px"} alt="Admin"/>
                        <h1>Norsafaliza Binti Ibrahim</h1>
                        <h4>IBDP Coordinator</h4>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    </>)
}