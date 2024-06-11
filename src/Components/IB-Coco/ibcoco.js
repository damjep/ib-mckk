import { SideBar } from "./sidebar"

export const IbCoco = () => {
    return (<>
    <SideBar/>
    <div>
        <img src={require("./ibdp.png")} alt="IB" />
        <div>
            <p>
            The International Baccalaureate Diploma Programme (DP) provides a challenging, internationally focused, broad and balanced educational experience for students aged 16 to 19. Students are required to study six subjects and a curriculum core concurrently over two years. The programme is designed to equip students with the basic academic skills needed for university study, further education and their chosen profession. Additionally, the programme supports the development of the values and life skills needed to live a ful lled and purposeful life. The Learner Profile and the core are positioned at the centre of the programme, reflecting the priority given to affective disposition as well as cognitive development, and a concern with developing competent and active citizens as well as subject specialists. The core requirements of theory of knowledge (TOK), the extended essay (EE), and creativity, activity, service (CAS) broaden the educational experience and challenge students to apply their knowledge and understanding in real-life contexts.
            </p>
        </div>
    </div>
    </>)
}