import { Accordion, Carousel } from "react-bootstrap"

export const Activities = () => {
    return (<>
    <div>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    Laboratories Experiment
                </Accordion.Header>
                <Accordion.Body>
                    <Carousel>
                        <Carousel.Item>
                            <img src={require("./assets/activities.jpg")} alt="Activities" width={"400px"}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={require("./assets/ia-1.jpg")} alt="Activities" width={"400px"}/>
                        </Carousel.Item>
                    </Carousel>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header>
                    IBDP MCKK Football Association
                </Accordion.Header>
                <Accordion.Body>
                    <Carousel>
                        <Carousel.Item>
                            <img src={require("./assets/c9-bola.jpg")} alt="Activities" width={"400px"}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={require("./assets/c10-bola.jpg")} alt="Activities" width={"400px"}/>
                        </Carousel.Item>
                    </Carousel>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </div>
    </>)
}