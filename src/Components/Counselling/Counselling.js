import { Tab, Tabs } from "react-bootstrap"
import { Support } from "./StudentSupport/Support"
import { Guide } from "./UniGuide/Guide"
import './styles.css'

export const Counselling = () => {
    return (<>
    <div>
       <Tabs data-bs-theme="dark" fill>
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