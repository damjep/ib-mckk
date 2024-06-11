import { Carousel, Image } from "react-bootstrap"
import { SideBar } from "../sidebar"

export const Calendar = () => {
    return (<>
    <SideBar />
    <div>
        <Carousel>
            <Carousel.Item>
                <Image src={require("./PLANNER 2024.jpg")} fluid />
            </Carousel.Item>
            <Carousel.Item>
                <Image src={require("./PLANNER2 2024.jpg")} fluid />
            </Carousel.Item>
            <Carousel.Item>
                <Image src={require("./PLANNER3 2024.jpg")} fluid />
            </Carousel.Item>
            <Carousel.Item>
                <Image src={require("./PLANNER4 2024.jpg")} fluid />
            </Carousel.Item>
        </Carousel>
        
    </div>
    </>)
}