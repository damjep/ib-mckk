import {ReactComponent as IB} from "./ib-home.svg"
import "./Main.css"
import { motion } from "framer-motion"

export const Main = () => {
    return (
        <>

        <div className="main-container">
            <div className="image-main-div">
                <IB/>
            </div>
        </div>
        
        <div>
            <h1>Vision</h1>
            <p>Excellence, Harmony , Leadership</p>
        </div>
        </>
    )
}
