import { useState } from "react"
import "./coco.css"
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import {BiMenu} from '@react-icons/all-files/bi/BiMenu'

export const SideBar = () => {
    const [show, setShow] = useState(false);

    return(<>
        <span id="coco" onMouseEnter={() => setShow(true)}>
            <BiMenu height='20px' />
        </span>

        <div className="w-100">
            <Offcanvas show={show} onHide={() => setShow(!show)}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        IB Curriculum
                    </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body className="coco-sidebar">
                    <button onClick={() => setShow(!show)}>
                        <Link to="/About">
                            About Us
                        </Link>
                    </button>

                    <button onClick={() => setShow(!show)}> 
                        <Link to="/LearnerProfile">
                            Learner Profile
                        </Link>
                    </button>

                    <button onClick={() => setShow(!show)}>
                        <Link to="/Core">
                            IB Core
                        </Link>
                    </button>

                    <button onClick={() => setShow(!show)}>
                        <Link to="/Subject">
                            What do we study?
                        </Link>
                    </button>

                    <button onClick={() => setShow(!show)}>
                        <Link to="/Schedule">
                            Student Schedule
                        </Link>
                    </button>

                    <button onClick={() => setShow(!show)}>
                        <Link to="/Calendar">
                            Calendar
                        </Link>
                    </button>

                    <button onClick={() => setShow(!show)}>
                        <Link to="/Assessment">
                            Assessment
                        </Link>
                    </button>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    </>)
}