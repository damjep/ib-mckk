import {Row, Container, Col} from "react-bootstrap"
import "./bog.css"

export const Bog = () => {
    return (<>
    <div>
        <h2>Board of Governors</h2>
        <div className="bog-sultan">
            <div className="img-sultan">
                <img src={require("./assets/sultan_nazrin.png")} alt="Royal Patreon"/>
                <h1>His Royal Higness, Sultan Nazrin Muizzudin Shah</h1>
                <h4>Royal Patron</h4>
            </div>
        </div>
        
        <div className="bog-chairmain">
            <div className="img-cm">
                <img src={require("./assets/chairman.png")} alt="Chairman"/>
                <h1>Tun Mohammed Hanif bin Omar</h1>
                <h4>Chairman</h4>
            </div>
        </div>
        
        <Grid />
    </div>    
    </>)
}

const Grid = () => {
    return (<>
    <div>
        <Container>
            <Row>
                <Col>
                    <div>
                       <img src={require("./assets/kamil.png")} alt="YTM"/>
                       <h1>YTM Tunku Dato' Seri Kamel Bin Tunku Rijaludin</h1>
                       <h4>Conference o Rulers Representative</h4>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={require("./assets/azman.png")} alt="YTM"/>
                        <h1>Tan Sri Azman bin Mokhtar</h1>
                        <h4>Conference o Rulers Representative</h4>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={require("./assets/hamid.png")} alt="YTM"/>
                        <h1>Tan Sri Abdul Hamid bin Embong</h1>
                        <h4>Conference o Rulers Representative</h4>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={require("./assets/ahmad.png")} alt="YTM"/>
                        <h1>Tan Sri Dr. Ahmad Tajuddin bin Ali</h1>
                        <h4>Conference o Rulers Representative</h4>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div>
                       <img src={require("./assets/zamzam.png")} alt="YTM"/>
                       <h1>Tan Sri Zamzamzairani bin Mohd Isa</h1>
                       <h4>Conference o Rulers Representative</h4>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={require("./assets/khalilur.png")} alt="YTM"/>
                        <h1>Datuk Khalilur Rahman bin Ebrahim</h1>
                        <h4>Conference o Rulers Representative</h4>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={require("./assets/burhan.png")} alt="YTM"/>
                        <h1>YTM Tunku Dato' Ahmad Burhanuddin bin Tunku Dato' Seri Adnan</h1>
                        <h4>MCOBA Representative</h4>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={require("./assets/dzulkifly.png")} alt="YTM"/>
                        <h1>Dato Dzulkifly Bin Mohd Zain</h1>
                        <h4>MCOBA Representative</h4>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div>
                       <img src={require("./assets/Ahmad Faisal.jpeg")} width={"255px"} height={"277px"} alt="YTM"/>
                       <h1>En. Ahmad Faizal Bin Fauzi</h1>
                       <h4>PIBG Representative</h4>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={require("./assets/hajiazman.jpeg")} width={"255px"} height={"277px"} alt="YTM"/>
                        <h1>Tuan Haji Azman Adnan</h1>
                        <h4>MOE Representative</h4>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src={require("./assets/ab aziz.jpg")} width={"255px"} height={"277px"} alt="YTM"/>
                        <h1>En. AB Aziz bin Mamat</h1>
                        <h4>MOE Representative</h4>
                    </div>
                </Col>
                <Col>
                    {/**Please Fix This */}
                    <div>
                        <img src={require("../Admin/assets/HM.jpg")}  width={"255px"} height={"277px"} alt="YTM"/>
                        <h1>Mohd Shahadan bin Abd Rahman</h1>
                        <h4>Secretary</h4>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    </>)
}