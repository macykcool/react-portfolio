
import React from "react";

function Resume() {
    return(
        <section>
            <div className="center">
                <h1>My Resume</h1>
            </div>
            <div className="center">
                <a href={require("../../assets/resume/Resume.pdf")} download>
                    <h3 id="resume-pdf">Resume PDF</h3>
                </a>
            </div>
            <div>
                <h5 className="center" >Education</h5>
                <ol>
                    <li>Trilogy Full Stack Web Development Bootcamp</li>
                    <li>BSBA Economics and Finance</li>
                    
                </ol>
            </div>
        </section>
    )
}

export default Resume;