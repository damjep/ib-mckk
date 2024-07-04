import { Tabs, Tab } from "react-bootstrap"
import { Graduation } from "./Graduation/Graduation"
import {Facilities } from "./Facilities/Facilities"
import { Activities } from "./Activities/Activities"
import {Achievement } from "./Achievements/Achievment.js"

export const StudentMain =()=> {
    return (<>
        <Tabs data-bs-theme='dark' fill>
            <Tab eventKey={Graduation} title='What Our Alumni Says' >
                <Graduation/>
            </Tab>
            <Tab eventKey={Facilities} title='Facilities'>
                <Facilities/>
            </Tab>
            <Tab eventKey={Activities} title='Activities'>
                <Activities/>
            </Tab>
            <Tab eventKey={Achievement} title='Achievements'>
                <Achievement/>
            </Tab>
        </Tabs>
    </>)
}