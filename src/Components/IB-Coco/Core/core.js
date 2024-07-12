import { Card, Col, Container, Row } from "react-bootstrap"
import { SideBar } from "../sidebar"
import "./core.css"

export const Core = () => {
    return (<>
    <SideBar />
    <div className="core-cont">
         <div className="core-main">
            <Card className="core-div">
                <Card.Header>
                    <video src={require("./assets/tok.mp4")} controls > </video>
                </Card.Header>
                <Card.Body>
                    <Card.Title>Theory Of Knowledge</Card.Title>
                    <Card.Text>
                    Students reflect on the nature of knowledge and on how we know what we claim to know
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className="core-div">
                <Card.Header>
                    <video src={require("./assets/ee.mp4")} controls />
                </Card.Header>
                <Card.Body>
                    <Card.Title>The Extended Essay</Card.Title>
                    <Card.Text>
                    Independent, self-directed piece of research, finishing with a 4,000 word paper
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        <div className="core-main">
            <Card className="core-div">
                <Card.Header>
                    <video src={require("./assets/cas.mp4")} controls/>
                </Card.Header>
                <Card.Body>
                    <Card.Title>CAS</Card.Title>
                    <Card.Text>
                    Students complete a project related to those three concepts
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    </div>
   
        

    
    </>)
}