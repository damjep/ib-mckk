import { Container, Row, Col } from "react-bootstrap"

export const Teacher = () => {
    return (<>
    <div>
        <Container>
            <h4>Teachers</h4>
            <Row>
                <Col>
                    <div className="border">
                        <img src={require("./assets/NORSAFALIZA IBRAHIM.jpg")} alt="Teachers" width={"255px"} height={"277px"}/>
                        <h1>Norsafaliza Ibrahim</h1>
                        <h4>IBDP Coordinator</h4>
                        <p>Email: <a href="mailto:ibc@mckk.edu.my">ibc@mckk.edu.my</a> </p>
                    </div>
                </Col>
            </Row>

            <Row>
                <h4>Subject: Malay A</h4>
                <Col>
                    <div className="border">
                        <img src={require("./assets/KHAIRUL BARIAH MAT BAKIRI.jpg")} alt="teacher.jpg" width={"255px"} height={"277px"}/>
                        <h3>KHAIRUL BARIAH MAT BAKIRI</h3>
                        <p>
                        Email : <a href="mailto:bariah@mckk.edu.my?subject=Enquiry" >bariah@mckk.edu.my</a> 
                        </p>
                    </div>
                </Col>

                <Col>
                    <div className="border column teacher tr">
                        <img src={require("./assets/MOHD GHAZALIE MALLY.jpg")} alt="teacher.jpg" width={"255px"} height={"277px"}/>
                        <h3>MOHD GHAZALIE MALLY</h3>
                        <p>
                        Email : <a href="mailto:ghazalie@mckk.edu.my?subject=Enquiry" >ghazalie@mckk.edu.my</a> 
                        </p>
                    </div>
                </Col>
            </Row>

            <Row>
                <h4>Subject: English</h4>
                <Col>
                    <div className="border">
                        <img src={require("./assets/KHAIRUL BARIAH MAT BAKIRI.jpg")} alt="teacher.jpg" width={"255px"} height={"277px"}/>
                        <h3>Mazita Mazlan</h3>
                        <p>
                        Email : <a href="mailto:mazita@mckk.edu.my?subject=Enquiry" >mazita@mckk.edu.my</a> 
                        </p>
                    </div>
                </Col>

                <Col>
                    <div className="border column teacher tr">
                        <img src={require("./assets/MOHD GHAZALIE MALLY.jpg")} alt="teacher.jpg" width={"255px"} height={"277px"}/>
                        <h3>Nasharil Nazrin Ramli</h3>
                        <p>
                        Email : <a href="mailto:nasharil.nazrin@mckk.edu.my?subject=Enquiry" >nasharil.nazrin@mckk.edu.my</a> 
                        </p>
                    </div>
                </Col>
            </Row>

            <Row>
                <h4>Subject: Bussiness Management</h4>
                <Col>
                    <div className="border">
                        <img src={require("./assets/KHAIRUL BARIAH MAT BAKIRI.jpg")} alt="teacher.jpg" width={"255px"} height={"277px"}/>
                        <h3>Mazita Mazlan</h3>
                        <p>
                        Email : <a href="mailto:mazita@mckk.edu.my?subject=Enquiry" >mazita@mckk.edu.my</a> 
                        </p>
                    </div>
                </Col>

                <Col>
                    <div className="border column teacher tr">
                        <img src={require("./assets/MOHD GHAZALIE MALLY.jpg")} alt="teacher.jpg" width={"255px"} height={"277px"}/>
                        <h3>Nasharil Nazrin Ramli</h3>
                        <p>
                        Email : <a href="mailto:nasharil.nazrin@mckk.edu.my?subject=Enquiry" >nasharil.nazrin@mckk.edu.my</a> 
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    </>)
}