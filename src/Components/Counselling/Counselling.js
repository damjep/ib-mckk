import { Tab, Tabs } from "react-bootstrap"
import { Support } from "./StudentSupport/Support"
import { Guide } from "./UniGuide/Guide"

export const Counselling = () => {
    return (<>
    <div>
       <Tabs>
        <Tab eventKey={"Support"} title="Support">
            <Support />
        </Tab>
        <Tab eventKey={"Guides"} title="Guide" >
            <Guide />
        </Tab>
       </Tabs>
    </div>
    </>)
}