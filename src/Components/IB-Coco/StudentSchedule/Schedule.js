import { Image } from "react-bootstrap"
import { SideBar } from "../sidebar"

export const Schedule = () => {
    return (<>
    <SideBar />
    <div className="w-100 d-flex flex-column m-auto">
        <h1>Student Schedule</h1>
        <div className="d-flex flex-column w-100 m-auto">
            <Image src={require("./TIMETABLE JAN 2024.jpg")} fluid className="w-75 h-100 m-auto"/>
        </div>
    </div>
    </>)
}