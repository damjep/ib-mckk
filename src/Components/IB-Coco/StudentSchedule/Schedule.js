import { Image } from "react-bootstrap"
import { SideBar } from "../sidebar"

export const Schedule = () => {
    return (<>
    <SideBar />
    <div>
        <h1>Student Schedule</h1>
        <div>
            <Image src={require("./TIMETABLE JAN 2024.jpg")} fluid />
        </div>
    </div>
    </>)
}