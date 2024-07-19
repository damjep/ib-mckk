import "./contact.css";
import { GoogleMap } from "./googlemap";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Resend } from "resend";

export const Contact = () =>{
    return (<>
    <Container>
        <Row className="contact-cont w-100 d-flex flex-column flex-sm-row">
            <Col className="contact-div">
                <GoogleMap />
            </Col>
            <Col className="contact-div">
                <FormContact />
            </Col>
        </Row>
    </Container>
    </>)
}

function FormContact () {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    async function sendEmail() {
        const resend = new Resend('re_ca1MkxdJ_6rXMX4wqmoMX9mStPcckxAFv');

        await resend.emails.send({
            from: {email},
            to: 'adamjeff143@gmail.com',
            subject: 'Hello World',
            text: 'Hello World'
        });
    }

    return (<>
        <Form className="w-100 d-flex flex-column gap-2"> 
            <Form.Group className="w-100">
                <Form.Label>Email us for a faster response !</Form.Label>
                <Form.Control className="w-100" type="email" placeholder="email@example.com" onChange={(e) => {setEmail(e.target.value)}} isValid={email.includes("@")} isInvalid={!email.includes("@")}/>
                {email}
            </Form.Group>
            <Form.Group>
                <Form.Control className="w-100" as="textarea" rows={3} placeholder="Enter message" onChange={(e) => {setMessage(e.target.value)}}/>
                {message}
            </Form.Group>
            <Form.Group>
                <Button type="submit" onSubmit={sendEmail} >Submit</Button>
            </Form.Group>
        </Form>
    </>)
    
}