import { Card, Image } from "react-bootstrap"
import { SideBar } from "../sidebar"

export const Assessment = () => {
    return (<>
    <SideBar/>
    <div>
        <Card>
            <Card.Header>
                Assessment
            </Card.Header>
            <Card.Body>
            IB Diploma students must take a prescribed set of subjects to achieve the IB diploma. Achievement in the overall diploma is described by a points score whose maximum is 45. Core subjects (CAS, TOK and EE) contribute up to three points to overall diploma outcome via a points matrix. Most subjects have multiple components which cover both external and internal assessment. Nearly all subjects are available at standard level (SL) or higher level (HL), and contribute equally to the overall diploma outcome. The overall diploma points are calculated by adding together the grades (1 up to 7) achieved from each of the six subjects and then including between zero and three points from the core.
            </Card.Body>
        </Card>

        <Card>
            <Card.Header>
            <Card.Title>Core Point Matrix</Card.Title>
                
            </Card.Header>
            <Card.Body>
            <Card.Img src={require("./core_points.jpg")} />
            Unlike the other subjects, theory of knowledge (TOK) and the extended essay (EE) are graded from A to E. The third element of the core, CAS, does not receive a grade as it would not be meaningful to evaluate performance in this area. The core is worth between zero and three points towards the overall diploma points. The candidate can also fail to achieve the diploma certificate if they obtain a grade E in either TOK or EE or if they do not complete CAS.
            </Card.Body>
        </Card>

        <Card>
            <Card.Header>
                <Card.Title>
                    Grade Description
                </Card.Title>
            </Card.Header>
            <Card.Body>
                
                <Card.Img src={require("./grade.jpg")} />
            </Card.Body>
        </Card>
    </div>
    </>)
}