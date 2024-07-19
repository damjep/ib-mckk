import { Carousel } from "react-bootstrap"

export const Facilities = () => {
    return (<>
    <div className="d-flex flex-column gap-3 m-3 ">
        <h1>Student Facilities</h1>
        <Carousel data-bs-theme="dark" className="w-75 d-flex flex-column m-auto align-center">
            <Carousel.Item>
                <img src={require("./assets/bilik.jpg")} alt="Facilities" className="w-100"/>
                <Carousel.Caption>
                    Student Dorm Room
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img src={require("./assets/games-room-2.jpg")} alt="Facilities" className="w-100"/>
                <Carousel.Caption>
                    Games Room (Ping Pong)
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img src={require("./assets/games-room.jpg")} alt="Facilities" className="w-100"/>
                <Carousel.Caption>
                    Games Room (Snooker)
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img src={require("./assets/ib-name-2.jpg")} alt="Facilities" className="w-100"/>
            </Carousel.Item>

            <Carousel.Item>
                <img src={require("./assets/ib_2.jpg")} alt="Facilities" className="w-100"/>
            </Carousel.Item>

            <Carousel.Item>
                <img src={require("./assets/ibeyond.jpg")} alt="Facilities" className="w-100"/>
                <Carousel.Caption>
                    Student Lounge Center (IBeyond)
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img src={require("./assets/isolation-room.jpg")} alt="Facilities" className="w-100"/>
                <Carousel.Caption>
                    Isolation Room (Sick Bay)
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img src={require("./assets/library.jpg")} alt="Facilities" className="w-100"/>
                <Carousel.Caption>
                    Library
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img src={require("./assets/musolla.jpg")} alt="Facilities" className="w-100"/>
                <Carousel.Caption>
                    Musolla
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img src={require("./assets/pantry-1.jpg")} alt="Facilities" className="w-100"/>
                <Carousel.Caption>
                    <h1>Student Pantry</h1>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img src={require("./assets/pantry-2.jpg")} alt="Facilities" className="w-100"/>
                <Carousel.Caption>
                    Student Pantry
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img src={require("./assets/pantry-3.jpg")} alt="Facilities" className="w-100"/>
                <Carousel.Caption>
                    Student's Pantry
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img src={require("./assets/tandas.jpg")} alt="Facilities" className="w-100"/>
                <Carousel.Caption>
                    Shared Bathroom
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img src={require("./assets/washing-machine.jpg")} alt="Facilities" className="w-100"/>
                <Carousel.Caption>
                    Washing Room
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
    </>)
}