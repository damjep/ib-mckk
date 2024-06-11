import { Accordion, Image } from "react-bootstrap"

export const Support = () => {
    return(<>
    <div>
        <h1>Student Support</h1>
        <p>We understand that there may be occasions when students need some assistance to make the most of the time here. Thus, we provide a wide range of student support to meet the needs of our students. Our staff are dedicated in helping to make the most of the opportunity and in assisting students need to fulfill their potential at the MCKK IBDP and beyond.</p>
        <div>
            <Accordion>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Mentoring System</Accordion.Header>
                    <Accordion.Body>
                    <Accordion.Body>
                            <Image src={require("./download.png")} alt="Counselling System" fluid/>
                    </Accordion.Body>
                    Each student will be assigned a mentor who will provide personal, one-to-one academic guidance and support throughout the two-year diploma programme.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Career Counselling</Accordion.Header>
                    <Accordion.Body>
                        <Accordion.Body>
                            <video src={require("./counselling_1.mp4")} controls width={"60%"}/>
                        </Accordion.Body>
                        A career counsellor is available to guide and help students with their university applications, as well as to steer students on the correct career pathways. This unit offers extensive resources to assist students in the search for appropiate courses and universities. One to one counselling sessions are also provided.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
    </>)
}