import { Modal } from "react-bootstrap";
import { Data } from "./TeacherNames.js"
import { useState } from "react";

export default function SideInfo () {
    const TeacherName = Data();
    const [ModalState, setModalState] = useState(
        TeacherName.map(() => false)
    )

    const handleClose = (index) => {
        setModalState(ModalState.map((show, i) => (i === index ? false : show)))
    }

    const handleShow = (index) => {
        setModalState(ModalState.map((show, i) => (i === index ? true : show)))
    }

    return ( <>
        <div className="d-flex flex-column">
            <h4 className="text-center">Staff Directory Quick Guide</h4>
            <p>
                <ul className="d-flex flex-row overflow-x-auto flex-sm-column">
                    {TeacherName && TeacherName.map((item, index) => {
                        return (<>
                            <li key={index} style={{listStyle: 'none'}}>
                                <button onClick={() => {handleShow(index)}} className="h-100 w-100">
                                    {item.name}
                                </button>
                                 
                            </li>

                            <Modal show={ModalState[index]} centered onHide={() => {handleClose(index)}} className="sideinfo-cont">
                                <Modal.Header closeButton>
                                    <Modal.Title>{item.name}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="sideinfo-modal">
                                    <div>
                                        <img src={item.image} alt={item.name} className="w-100"/>
                                    </div>
                                    <div>
                                        <p>
                                            {(item.subject)? <>
                                                <div className="sideinfo-subject">
                                                    <h4>
                                                        Subject Teacher:
                                                    </h4> 
                                                    {item.subject && item.subject.map((subject, index) => {
                                                        return (<>
                                                        
                                                            <p key={index}>
                                                                {subject}
                                                            </p>
                                                        
                                                        </>)
                                                    })}
                                                </div>
                                            </> : <>
                                            
                                            </>}
                                            Role: {item.role}<br />
                                            Email: 
                                            <a href={`mailto:${item.email}`} >
                                                {item.email}
                                            </a>
                                        </p>
                                    </div>
                                    
                                </Modal.Body>
                            </Modal>
                        </>)
                    })}
                </ul>
            </p>
        </div>
    </>)
}