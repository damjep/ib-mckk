import { useState } from "react"
import "./coco.css"
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

export const SideBar = () => {
    const [show, setShow] = useState(false);

    return(<>
        <span id="coco" onMouseEnter={() => setShow(true)}></span>

        <div>
            <Offcanvas show={show} onHide={() => setShow(!show)}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        IB Curriculum
                    </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                    <button>
                        <Link to="/About">
                            About Us
                        </Link>
                    </button>

                    <button>
                        <Link to="/LearnerProfile">
                            Learner Profile
                        </Link>
                    </button>

                    <button>
                        <Link to="/Core">
                            IB Core
                        </Link>
                    </button>

                    <button>
                        <Link to="/Subject">
                            What do we study?
                        </Link>
                    </button>

                    <button>
                        <Link to="/Schedule">
                            Student Schedule
                        </Link>
                    </button>

                    <button>
                        <Link to="/Calendar">
                            Calendar
                        </Link>
                    </button>

                    <button>
                        <Link to="/Assessment">
                            Assessment
                        </Link>
                    </button>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    </>)
}