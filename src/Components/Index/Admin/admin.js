import { Container, Row, Col } from "react-bootstrap"
import { FaRegUser } from "@react-icons/all-files/fa/FaRegUser";
import "./admin.css"
export const Admin = () => {
    return (<>
    <div className="mb-5">
        <Container>
            <Row >
                <Col>
                    <div className="admin-principal d-flex flex-column gap-2">
                        <img src={require("./assets/HM.jpg")} width={"255px"} height={"277px"} alt="Principal" />
                        <h1>Mohd Shahadan bin Abd Rahman</h1>
                        <h4>Principal</h4>
                    </div>
                </Col>
            </Row>

            <div className="admin-rest d-flex flex-column gap-5">
                <Row style={{flex: "auto"}} className="d-flex flex-column gap-5 flex-sm-row">
                    <Col>
                        <div className="d-flex flex-column gap-2">
                            <img src={require("./assets/KHAINURI.jpg")} width={"255px"} height={"277px"} alt="Admin"/>
                            <h1>Khainuri Bin Hanafiah</h1>
                            <h4>Senior Assistant of Administration</h4>
                        </div>
                    </Col>
                    <Col>
                        <div className="d-flex flex-column gap-2">
                            <FaRegUser size={290} />
                            <h1>Vacant</h1>
                            <h4>Senior Assistant of Student's Affair</h4>
                        </div>
                    </Col>
                </Row>

                <Row style={{flex: "auto"}} className="d-flex flex-column gap-5 flex-sm-row">
                    <Col>
                        <div className="d-flex flex-column gap-2">
                            <img src={require("./assets/Rabiatul.jpg")} width={"255px"} height={"277px"} alt="Admin"/>
                            <h1>Rabiatul Adwiah Binti Pathil</h1>
                            <h4>Senior Assistant of Co-Curricular</h4>
                        </div>
                    </Col>
                    <Col>
                        <div className="d-flex flex-column gap-2">
                            <img src={require("../Teachers/assets/NORSAFALIZA IBRAHIM.jpg")} width={"255px"} height={"277px"} alt="Admin"/>
                            <h1>Norsafaliza Binti Ibrahim</h1>
                            <h4>IBDP Coordinator</h4>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </div>
    </>)
}