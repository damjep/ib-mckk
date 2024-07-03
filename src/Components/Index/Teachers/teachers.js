import { Container, Row, Col } from "react-bootstrap"
import "./teachers.css"

export const Teacher = () => {
    return (<>
    <div>
        <Container>
            <h4>Teachers</h4>
            <Row>
                <Col>
                    <div className="t-1">
                        <img src={require("./assets/NORSAFALIZA IBRAHIM.jpg")} alt="Teachers" width={"255px"} height={"277px"}/>
                        <h1>Norsafaliza Ibrahim</h1>
                        <h4>IBDP Coordinator</h4>
                        <p>Email: <a href="mailto:ibc@mckk.edu.my">ibc@mckk.edu.my</a> </p>
                    </div>
                </Col>
            </Row>

            <div className="t-2">
                <Row style={{flex: 'auto'}}>
                    <h4>Subject: Malay A</h4>
                    <Col >
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

                <Row style={{flex: 'auto'}}>
                    <h4>Subject: English</h4>
                    <Col>
                        <div className="border">
                            <img src={require("./assets/MAZITA MAZLAN.jpg")} alt="teacher.jpg" width={"255px"} height={"277px"}/>
                            <h3>Mazita Mazlan</h3>
                            <p>
                            Email : <a href="mailto:mazita@mckk.edu.my?subject=Enquiry" >mazita@mckk.edu.my</a> 
                            </p>
                        </div>
                    </Col>

                    <Col>
                        <div className="border column teacher tr">
                            <img src={require("./assets/NASHARIL NAZREN RAMLI.jpg")} alt="teacher.jpg" width={"255px"} height={"277px"}/>
                            <h3>Nasharil Nazrin Ramli</h3>
                            <p>
                            Email : <a href="mailto:nasharil.nazrin@mckk.edu.my?subject=Enquiry" >nasharil.nazrin@mckk.edu.my</a> 
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
            

            <div className="t-2">
                <Row style={{flex: 'auto'}}>
                    <h4>Subject: Business Management </h4>
                    <Col >
                        <div className="border">
                            <img src={require("./assets/AHMAD TARMIZI MD SA.jpg")} alt="teacher.jpg" width={"255px"} height={"277px"}/>
                            <h3> Ahmad Tarmizi Md Isa </h3>
                            <p>
                            Email : <a href="mailto:tarmizi@mckk.edu.my?subject=Enquiry" >tarmizi@mckk.edu.my</a> 
                            </p>
                        </div>
                    </Col>

                    <Col>
                        <div className="border column teacher tr">
                            <img src={require("./assets/NURUL HUDA ABDULLAH.jpg")} alt="teacher.jpg" width={"255px"} height={"277px"}/>
                            <h3> Nurul Huda Abdullah</h3>
                            <p>
                            Email : <a href="mailto:nurulhuda@mckk.edu.my?subject=Enquiry" >nurulhuda@mckk.edu.my</a> 
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row style={{flex: 'auto'}}>
                    <h4>Subject: Economics</h4>
                    <Col>
                        <div className="border">
                            <img src={require("./assets/ROHANA TAHIR.jpg")} alt="teacher.jpg" width={"255px"} height={"277px"}/>
                            <h3> Rohana Tahir</h3>
                            <p>
                            Email : <a href="mailto:rohana@mckk.edu.my?subject=Enquiry" >rohana@mckk.edu.my</a> 
                            </p>
                        </div>
                    </Col>

                    <Col>
                        <div className="border column teacher tr">
                            <img src={require("./assets/AHMAD TARMIZI MD SA.jpg")} alt="teacher.jpg" width={"255px"} height={"277px"}/>
                            <h3> Ahmad Tarmizi Bin Mohd Isa </h3>
                            <p>
                            Email : <a href="mailto:tarmizi@mckk.edu.my?subject=Enquiry" >tarmizi@mckk.edu.my</a> 
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="t-2">
                <Row style={{flex: 'auto'}}>
                    <h4>Subject: Theort of Knowledge</h4>
                    <Col >
                        <div className="border">
                            <img src={require("./assets/NURUL HUDA ABDULLAH.jpg")} alt="teacher.jpg" width={"255px"} height={"277px"}/>
                            <h3>Nurul Huda Abdullah</h3>
                            <p>
                            Email : <a href="mailto:nurulhuda@mckk.edu.my?subject=Enquiry" >nurulhuda@mckk.edu.my</a> 
                            </p>
                        </div>
                    </Col>

                    <Col>
                        <div className="border column teacher tr">
                            <img src={require("./assets/NOORA MURNI .jpg")} alt="teacher.jpg" width={"255px"} height={"277px"}/>
                            <h3>Noora Murni Mohamad Noor</h3>
                            <p>
                            Email : <a href="mailto:noora@mckk.edu.my?subject=Enquiry" >noora@mckk.edu.my</a> 
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row style={{flex: 'auto'}}>
                    <h4>Subject: History</h4>
                    <Col>
                        <div className="border">
                            <img src={require("./assets/NOORA MURNI .jpg")} alt="teacher.jpg" width={"255px"} height={"277px"}/>
                            <h3> Noora Murni Mohamad Noor</h3>
                            <p>
                            Email : <a href="mailto:noora@mckk.edu.my?subject=Enquiry" >noora@mckk.edu.my</a> 
                            </p>
                        </div>
                    </Col>

                    <h4>Subject: Physics</h4>
                    <Col>
                        <div className="border column teacher tr">
                            <img src={require("./assets/NURUL NABISAH.jpg")} alt="teacher.jpg" width={"255px"} height={"277px"}/>
                            <h3> Nurul Nabisah Haji Mohamad </h3>
                            <p>
                            Email : <a href="mailto:nabisah@mckk.edu.my?subject=Enquiry" >nabisah@mckk.edu.my</a> 
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="t-2">
                <Row style={{flex: 'auto'}}>
                    <h4>Subject: Chemistry</h4>
                    <Col >
                        <div className="border">
                            <img src={require("./assets/ROSNANI GHAZALI.jpg")} alt="teacher.jpg" width={"255px"} height={"277px"}/>
                            <h3> Rosnani Ghazali</h3>
                            <p>
                            Email : <a href="mailto:rosnani@mckk.edu.my?subject=Enquiry" >rosnani@mckk.edu.my</a> 
                            </p>
                        </div>
                    </Col>

                    <Col>
                        <div className="border column teacher tr">
                            <img src={require("./assets/NURUL 'ADILAH ABDUL HALIM.jpeg")} alt="teacher.jpg" width={"255px"} height={"277px"}/>
                            <h3>Nurul Adilah Abdul Halim</h3>
                            <p>
                            Email : <a href="mailto:adilah@mckk.edu.my?subject=Enquiry" >adilah@mckk.edu.my</a> 
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row style={{flex: 'auto'}}>
                    <h4>Subject: Mathematics</h4>
                    <Col>
                        <div className="border">
                            <img src={require("./assets/AHMAD FAZMI ZAINUDDIN.jpg")} alt="teacher.jpg" width={"255px"} height={"277px"}/>
                            <h3>Ahmad Fazmi Zainuddin</h3>
                            <p>
                            Email : <a href="mailto:ahmadfazmi@mckk.edu.my?subject=Enquiry" >ahmadfazmi@mckk.edu.my</a> 
                            </p>
                        </div>
                    </Col>

                    <Col>
                        <div className="border column teacher tr">
                            <img src={require("./assets/S.SIVAGAMI SIMANATHAN.jpg")} alt="teacher.jpg" width={"255px"} height={"277px"}/>
                            <h3> S.Sivagami Saminathan </h3>
                            <p>
                            Email : <a href="mailto:sivagami@mckk.edu.my?subject=Enquiry" >sivagami@mckk.edu.my</a> 
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="t-2">
                <Row style={{flex: 'auto'}}>
                    <h4>Subject: Biology / Evironmental Sciences</h4>
                    <Col >
                        <div className="border">
                            <img src={require("./assets/ZAHRIHAN AZURA AZAHAN.jpg")} alt="teacher.jpg" width={"255px"} height={"277px"}/>
                            <h3>Zahrihan Azura Azahan</h3>
                            <p>
                            Email : <a href="mailto:zahrihan@mckk.edu.my?subject=Enquiry" >zahrihan@mckk.edu.my</a> 
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row style={{flex: 'auto'}}>
                    <h4>Subject: Visual Arts</h4>
                    <Col>
                        <div className="border">
                            <img src={require("./assets/ERWAN MOHD ZAID.jpg")} alt="teacher.jpg" width={"255px"} height={"277px"}/>
                            <h3>Erwan Mohd Zaid</h3>
                            <p>
                            Email : <a href="mailto:erwan@mckk.edu.my?subject=Enquiry" >erwan@mckk.edu.my</a> 
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </div>
    </>)
}