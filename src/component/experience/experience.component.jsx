import React from "react";
import './experience.styles.css';
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id="experience">
            <h4>
                What Skills I have
            </h4>
            <h2>
                My SKills
            </h2>
            <div className="container experience-container">
                <div className="experience-language">
                    <h3>Language/Programming</h3>
                    <div className="experience-content">
                        <article className="experience-details">
                            <BsPatchCheckFill className="edit-icon" />
                            <div>
                                <h4>C/C++</h4>
                                <small className="text-light">Advanced</small>
                            </div>

                        </article>

                        <article className="experience-details">
                            <BsPatchCheckFill className="edit-icon" />
                            <div>
                                <h4>Data Structure </h4>
                                <small className="text-light">Advanced</small>
                            </div>

                        </article>

                        <article className="experience-details">
                            <BsPatchCheckFill className="edit-icon" />
                            <div>
                                <h4>SQL and DBMS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>

                        </article>

                        <article className="experience-details">
                            <BsPatchCheckFill className="edit-icon" />
                            <div>
                                <h4>Python</h4>
                                <small className="text-light">Intermediate</small>
                            </div>


                        </article>

                        <article className="experience-details">
                            <BsPatchCheckFill className="edit-icon" />
                            <div>
                                <h4>HTML,CSS, Javascript</h4>
                                <small className="text-light">Intermediate</small>

                            </div>

                        </article>

                        <article className="experience-details">
                            <BsPatchCheckFill className="edit-icon" />
                            <div>
                                <h4>Object Oriented Programming</h4>
                                <small className="text-light">Intermediate</small>
                            </div>

                        </article>
                    </div>
                </div>


                <div className="experience-tech">
                    <h3>Technology/Frameworks</h3>
                    <div className="experience-content">
                        <article className="experience-details">
                            <BsPatchCheckFill className="edit-icon" />
                            <div>
                                <h4>React.js</h4>
                                <small className="text-light">Intermediate</small>

                            </div>

                        </article>

                        <article className="experience-details">
                            <BsPatchCheckFill className="edit-icon" />
                            <div>
                                <h4>Node.js</h4>
                                <small className="text-light">Intermediate</small>

                            </div>

                        </article>

                        <article className="experience-details">
                            <BsPatchCheckFill className="edit-icon" />
                            <div>
                                <h4>Operating System</h4>
                                <small className="text-light">Intermediate</small>
                            </div>

                        </article>

                        <article className="experience-details">
                            <BsPatchCheckFill className="edit-icon" />
                            <div>
                                <h4>Git and GitHub</h4>
                                <small className="text-light">Intermediate</small>

                            </div>

                        </article>

                        <article className="experience-details">
                            <BsPatchCheckFill className="edit-icon" />
                            <div>
                                <h4>Machine Learning</h4>
                                <small className="text-light">Basics</small>
                            </div>

                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className="edit-icon" />
                            <div>
                                <h4>Computer Network</h4>
                                <small className="text-light">Intermediate</small>

                            </div>

                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Experience;