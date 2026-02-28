import React, {useEffect, useRef} from "react";
import UnityImg from "../assets/images/unity-img.png";
import UE5Img from "../assets/images/ue5-img.png";
import GodotImg from "../assets/images/godot-img.png";
import CSharpImg from "../assets/images/csharp-img.png";
import CPlusPlusImg from "../assets/images/c++-img.png";
import PhotoshopImg from "../assets/images/photoshop-img.png";
import Workflows from "../assets/images/workflows-img.png";
import GitImg from "../assets/images/git-img.png";
import Python from "../assets/images/python-img.png";

const Resume = () => {
    const colors = [
        "#BCE70C",
        "#FF759C",
        "#00CC97",
        "#FFDB59",
        "#6F39FD",
        "#FF7D61",
    ];
    const progressRef = useRef(null);
    const hasAnimated = useRef(false); // Track if the animation has already run

    return (
        <>
            {/* */}
            {/* ADDED mb-5 HERE */}
            <section className="education-experience mb-5" id="resume">
                <div className="row">
                    <div className="col-12"> 
                        <div className="heading-container">
                            <h2 className="section-heading-text about-me fade_up">
                                Experience.
                            </h2>
                            <div className="line"></div>
                        </div>

                        {/* EXPERIENCE ITEM 1: Development Lead (Stacked) */}
                        <div className="education position-relative fade_up">
                            <div className="side_circle_ring">
                                <div className="small_yellow_border">
                                    <div className="small_yellow_circle"></div>
                                </div>
                            </div>
                            <div className="small_yellow_border_main">
                                <p className="bachelor"> Development Lead</p>
                                <p className="cursus university">GreyDotLab 09/2024 - PRESENT</p>
                                <p className="cursus">
                                    Leading an agile development team focused on creating pipeline optimization tools for Unreal Engine 5. Acting directly on solution architecture to integrate artistic needs with technical feasibility, using Blueprints and Python to eliminate repetitive tasks. Developed an automation system for Sequencer and asset import that reduced production costs by 10%, ensuring the art team has the necessary technical support to focus on visual quality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* New Row for the remaining stacked experience items */}
                <div className="row"> 
                    
                    {/* EXPERIENCE ITEM 2: Senior Unity Developer (Stacked) */}
                    <div className="col-12">
                        <div className="education position-relative fade_up">
                            <div className="side_circle_ring">
                                <div className="small_yellow_border">
                                    <div className="small_yellow_circle"></div>
                                </div>
                            </div>
                            <div className="small_yellow_border_main">
                                <p className="bachelor">Senior Unity Developer</p>
                                <p className="cursus university">Medroom 05/2022 - 01/2026</p>
                                <p className="cursus">
                                    Worked on the full development of Clinical Case, a VR medical care simulator, evolving from Junior to Senior level through consistent delivery. Implemented complex examination and anamnesis systems, working in close partnership with the QA team to identify and resolve critical bugs. Actively collaborated with the UI/UX team on the complete restructuring of the user interface, ensuring the technical fidelity of the design across three major product updates.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* EXPERIENCE ITEM 3: Trainee Unity Developer (Stacked) */}
                    <div className="col-12"> 
                        <div className="education position-relative fade_up">
                            <div className="side_circle_ring">
                                <div className="small_yellow_border">
                                    <div className="small_yellow_circle"></div>
                                </div>
                            </div>
                            <div className="small_yellow_border_main">
                                <p className="bachelor">Trainee Unity Developer</p>
                                <p className="cursus university">LIGA Facens 01/2021 - 04/2022</p>
                                <p className="cursus">
                                    Participated in the development and maintenance of licensed mobile games (SBT), including "Poliana Cake Crush" and "Show do Milhão". Managed the full lifecycle of hyper-casual projects, from gameplay programming to the build process and store publication, always seeking to learn from the senior team and contribute to the efficiency of version control processes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* */}
            
            {/* */}
            {/* ADDED mb-5 HERE */}
            <section className="education-experience mb-5"> 
                <div className="row">
                    {/* The entire EDUCATION block now takes up 12 columns */}
                    <div className="col-12"> 
                        <div className="heading-container">
                            <h2 className="section-heading-text about-me fade_up">
                                Education.
                            </h2>
                            <div className="line"></div>
                        </div>
                        <div className="education position-relative fade_up">
                            <div className="side_circle_ring">
                                <div className="small_yellow_border">
                                    <div className="small_yellow_circle"></div>
                                </div>
                            </div>
                            <div className="small_yellow_border_main">
                                <p className="bachelor">Continuous Education & Self-Taught</p>
                                <p className="cursus university">
                                    Focus on Software Engineering and Game Development Specialization courses on platforms such as Alura and Udemy, with practical emphasis on game engines, programming languages, and development methodologies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* */}

            {/* */}
            <section className="design-skill-section">
                <div className="heading-container">
                    <h2 className="section-heading-text design-skill-text fade_up">
                        Skills.
                    </h2>
                    <div className="line"></div>
                </div>
                <div className="design-skill-sub-section">
                    <div className="design-skills-img-main flip_up">
                        <img src={UnityImg} alt="unity-img"/>
                        <div className="skill-counter-main sketch-text">
                            <p></p>
                            <p>Unity</p>
                        </div>
                    </div>
                    <div className="design-skills-img-main flip_up">
                        <img src={UE5Img} alt="ue5-img"/>
                        <div className="skill-counter-main sketch-text">
                            <p></p>
                            <p>Unreal Engine</p>
                        </div>
                    </div>
                    <div className="design-skills-img-main adobe-xd flip_up">
                        <img src={CSharpImg} alt="csharp-img"/>
                        <div className="skill-counter-main sketch-text">
                            <p></p>
                            <p>C#</p>
                        </div>
                    </div>
                    <div className="design-skills-img-main flip_up">
                        <img src={Workflows} alt="workflows-img"/>
                        <div className="skill-counter-main sketch-text">
                            <p></p>
                            <p>Workflows</p>
                        </div>
                    </div>

                    <div className="design-skills-img-main flip_up">
                        <img src={PhotoshopImg} alt="photoshop-img"/>
                        <div className="skill-counter-main sketch-text">
                            <p></p>
                            <p>Photoshop</p>
                        </div>
                    </div>
                    <div className="design-skills-img-main flip_up">
                        <img src={GitImg} alt="git-img"/>
                        <div className="skill-counter-main sketch-text">
                            <p></p>
                            <p>GIT System</p>
                        </div>
                    </div>
                    <div className="design-skills-img-main flip_up">
                        <img src={CPlusPlusImg} alt="c++-img"/>
                        <div className="skill-counter-main sketch-text">
                            <p></p>
                            <p>C++</p>
                        </div>
                    </div>
                    <div className="design-skills-img-main flip_up">
                        <img src={Python} alt="python-img"/>
                        <div className="skill-counter-main sketch-text">
                            <p></p>
                            <p>Python</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* */}
        </>
    );
};
export default Resume;