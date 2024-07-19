import {ReactComponent as IB} from "./ib-home.svg"
import "./Main.css"
import { motion } from "framer-motion"

export const Main = () => {
    return (
        <>
        <div className="min-vh-100 h-75 d-flex flex-column" >
        <div className="main-container">
            <div className="image-main-div w-100 h-100 ratio ratio-16x9">
                <IB className="" width={'50vw'} />
            </div>
        </div>
        
        <div className="d-flex flex-column w-100 h-100 m-auto">
            <div className="m-auto d-flex flex-column">
                <h1 className="m-auto">Vision</h1>
                <p>Excellence, Harmony , Leadership</p>
            </div>
            
        </div>
        </div>
        </>
    )
}
