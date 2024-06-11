import { SideBar } from "../sidebar"
import { Accordion, Card, Image } from "react-bootstrap"

export const Subject = () => {
    return(<>
    <SideBar />
    <C10 />
    <SubjectGroup />
    <Subjects />
    </>)
}

const SubjectGroup = () => {
    return(<>
        <div>
            <h1>What Do We Study ?</h1>
            <h2>Subject Groups</h2>
            <p>In the International Baccalaureate Diploma Programme, students choose one subject from each of the six subject groups:</p>
            <p>
                <ul>
                    <li><a href="https://www.ibo.org/programmes/diploma-programme/curriculum/language-and-literature/">Studies in Language and Literature</a></li>
                    <li><a href="https://www.ibo.org/programmes/diploma-programme/curriculum/language-acquisition/">Language Acquisition</a></li>
                    <li><a href="https://www.ibo.org/programmes/diploma-programme/curriculum/individuals-and-societies/">Individuals and Societies</a></li>
                    <li><a href="https://www.ibo.org/programmes/diploma-programme/curriculum/sciences/">Sciences</a></li>
                    <li><a href="https://www.ibo.org/programmes/diploma-programme/curriculum/mathematics/">Mathematics</a></li>
                    <li><a href="https://www.ibo.org/programmes/diploma-programme/curriculum/the-arts/">The Arts or Electives</a></li>
                </ul>
            </p>
            <p>
            This ensures a well-rounded education with breadth and depth across various disciplines. Additionally, students may have the option to select higher level (HL) or standard level (SL) courses based on their interests and academic strengths.
            Students are also required to choose between 3 HL courses and 3 SL courses. A minimum of 6 courses altogether.
            </p>
        </div>
    </>)
}

const C10 = () => {
    return (<>
    <div>
        <Image src={require("./C10 - 2.JPG")} alt="C10" fluid />
    </div>
    </>)
}

const Subjects = () => {
    return (<>
    <h1>Subjects We Offer</h1>
    <div>
        <Card>
            <Card.Header>
            Studies in Language and Literature
            </Card.Header>
            <Card.Body>
                <Accordion>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            Malay A Literature ( SL ) 
                        </Accordion.Header>
                        <Accordion.Body>
                        The language A : literature aims at exploring the various manifestations of literature as a particularly powerful mode of writing across cultures and throughout history. The course aims at developing an understanding of factors that contribute to the production and reception of literature.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card.Body>
        </Card>

        <Card>
            <Card.Header>
                Languae Acquisition
            </Card.Header>
            <Card.Body>
                <Accordion>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            English B ( HL / SL ) 
                        </Accordion.Header>
                        <Accordion.Body>
                        Language acquisition consists of two modern language courses - language B - designed to provide students with the necessary skills and intercultural understanding to enable them to communicate successfully in an environment where the language studied is spoken.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card.Body>
        </Card>

        <Card>
            <Card.Header>
                Individual and Societies
            </Card.Header>
            <Card.Body>
                <Accordion>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            Bussiness Management ( HL / SL ) 
                        </Accordion.Header>
                        <Accordion.Body>
                        This course is designed to develop students’ knowledge and understanding of business management theories, as well as their ability to apply a range of tools and techniques. Students learn to analyse, discuss and evaluate business activities at local , national and international level. The course covers a range of organizations from all sectors, as well as the economic contexts in which those organizations operate.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Accordion>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            Economics ( HL / SL ) 
                        </Accordion.Header>
                        <Accordion.Body>
                        Economics is an exciting , dynamic subject that allows student to develop an understanding of the complexities and interdependence of economic activities in a rapidly changing world. In this course, students are allowed to explore economic models , theories and key concepts, and apply them, using empirical data , through the examination of six real-world issues. Students will develop the knowledge, skills, values and attitudes that will encourage them to act responsibly.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Accordion>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            History ( HL / SL ) 
                        </Accordion.Header>
                        <Accordion.Body>
                        World history is a course based on a comparative and multi-perspective approach to history. It involves the study of a variety of types of history, including political, economic, social and cultural, and provides a balance of structure and flexibility.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card.Body>
        </Card>

        <Card>
            <Card.Header>
                Sciences
            </Card.Header>
            <Card.Body>
                <Accordion>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            Physics ( HL / SL ) 
                        </Accordion.Header>
                        <Accordion.Body>
                        Physics is the most fundamental of the experimental sciences as it seeks to explain the universe itself, from the very smallest particles to the vast distances between galaxies. Despite the exciting and extraordinary development of ideas throughout the history of physics, observations remain essential to the very core of the subject. Models are developed to try to understand observations, and these themselves can become theories that attempt to explain the observations.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Accordion>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            Chemistry ( HL / SL ) 
                        </Accordion.Header>
                        <Accordion.Body>
                        Chemistry is an experimental science that combines academic study with the acquisition of practical and investigational skills. Chemical principles underpin both the physical environment in which we live and all biological systems. Chemistry is often a prerequisite for many other courses in higher education, such as medicine, biological science and environmental science.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Accordion>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            Biology ( HL / SL ) 
                        </Accordion.Header>
                        <Accordion.Body>
                        Biology is the study of life. The vast diversity of species makes biology both an endless source of fascination and a considerable challenge. Biologists attempt to understand the living world at all levels from the micro to the macro using many different approaches and techniques. Biology is still a young science and great progress is expected in the 21st century. This progress is important at a time of growing pressure on the human population and the environment.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Accordion>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            Evironmental Systems and Societies ( HL / SL ) 
                        </Accordion.Header>
                        <Accordion.Body>
                        ESS is both a complex and contemporary course that engages students in the challenges of 21st century environmental issues. Consequently, it requires its students to develop a diverse set of skills, knowledge and understanding from different disciplines. Students develop a scientific approach through explorations of environmental systems. They also acquire understandings and methods from individuals and societies subjects whilst studying sustainability issues within social, cultural, economic, political, and ethical contexts. The interdisciplinary nature of the course means students produce a synthesis of understanding from the various topics studied. It also emphasizes the ability to perform research and investigations and to participate in philosophical, ethical, and pragmatic discussions of the issues involved from the local through to the global level.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card.Body>
        </Card>

        <Card>
            <Card.Header>
                Mathematics
            </Card.Header>
            <Card.Body>
                <Accordion>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            Mathematics : Analysis and Approcahes ( HL / SL ) 
                        </Accordion.Header>
                        <Accordion.Body>
                        The IB DP Mathematics: analysis and approaches course recognizes the need for analytical expertise in a world where innovation is increasingly dependent on a deep understanding of mathematics. The focus is on developing important mathematical concepts in a comprehensible, coherent and rigorous way, achieved by a carefully balanced approach. Students are encouraged to apply their mathematical knowledge to solve abstract problems as well as those set in a variety of meaningful contexts.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card.Body>
        </Card>

        <Card>
            <Card.Header>
                The Arts
            </Card.Header>
            <Card.Body>
                <Accordion>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            Visual Arts ( HL / SL ) 
                        </Accordion.Header>
                        <Accordion.Body>
                        The IB Diploma Programme visual arts course encourages students to challenge their own creative and cultural expectations and boundaries. It is a thought-provoking course in which students develop analytical skills in problem-solving and divergent thinking, while working towards technical proficiency and confidence as art-makers. In addition to exploring and comparing visual arts from different perspectives and in different contexts, students are expected to engage in, experiment with and critically reflect upon a wide range of contemporary practices and media. The course is designed for students who want to go on to study visual arts in higher education as well as for those who are seeking lifelong enrichment through visual arts.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card.Body>
        </Card>
    </div>
    </>)
}