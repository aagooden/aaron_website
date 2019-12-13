import React, { Component } from 'react'
import '../styles/Experience.css'

class Experience extends Component {

    render() {
        return <div className="Experience">
            <div className="experience-header">
                <h1>Experience</h1>
            </div>

            <div className="experience-container">
                <div class="row">
                    <div class="column1">
                        <h3>Developer: </h3>
                        <h4>Silicon Holler Software Consultancy (Richwood, WV)</h4>
                        <h4>05/2019 – Present</h4>
                    </div>
                    <div class="column2">
                        <ul>
                            <li>Developed code for data normalization of data imports for a veterinary customer relationship management system.</li>
                            <li>Implemented custom SQL for data exports.</li>
                            <li>Transferred codebase to AWS EC2 Linux instance for faster processing.</li>
                        </ul>
                    </div>
                </div>
                <br />
                <hr />
                <br />

                <div class="row">
                    <div class="column1">
                        <h3>Full Stack Web Developer: </h3>
                        <h4>Mined Minds Foundation</h4>
                        <h4>04/2018 – 04/2019</h4>
                    </div>
                    <div class="column2">
                        <ul>
                            <li>Added frontend and backend features to multiple projects.</li>
                            <li>Wrote and updated unit tests.</li>
                            <li>Interfaced daily with customers through daily "standups".</li>
                            <li>Mentored Boot Camp students.</li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    }
}

export default Experience