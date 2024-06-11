import { Accordion } from "react-bootstrap"

export const Guide = () => {
    return (<>
    <div>
        <h1>University Guide</h1>
        <p>
        Universities prefer IB students because the IB curriculum develops a balanced variety of skills. IB graduates, with the range of subjects they have studied, have a greater choice of undergraduate programmes. Employers, too, are increasingly looking for flexibility and adaptability, which is something all IB students are able to offer.
        </p>

        <div>
            <Accordion>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        PDF Documentation
                    </Accordion.Header>
                    <Accordion.Body>
                        <button>Download</button>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        IB With University Application
                    </Accordion.Header>
                    <Accordion.Body>
                    How students should discuss their IB results with university application ?
                    <Accordion.Body>
                        <video src={require("./counselling_2.mp4")} controls width={"60%"}/>    
                    </Accordion.Body>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
    </>)
}