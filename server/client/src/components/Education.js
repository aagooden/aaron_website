import React, { Component } from 'react'
import '../styles/Education.css'

class Education extends Component {

    render() {
        return <div className="Education">
            <div className="education-header">
                <h1>Education</h1>
            </div>

            <div className="education-container">
                <div className="schools">
                    <h1>Software Development Boot Camp</h1>
                    <h2>Mined Minds Foundation</h2>
                    <p>01/2018 – 04/2019</p>
                </div>
                <div className="schools">
                    <h1>Master of Arts: Christian Education</h1>
                    <h2>Methodist Theological School in Ohio</h2>
                    <p>09/1994 – 05/1999</p>
                </div>
                <div className="schools">
                    <h1>Master of Arts: Divinity</h1>
                    <h2>Methodist Theological School in Ohio</h2>
                    <p>09/1994 – 05/1999</p>
                </div>
                <div className="schools">
                    <h1>Bachelor of Arts: Philosophy and Religion</h1>
                    <h2>Ohio Northern University</h2>
                    <p>09/1991 – 05/1994</p>
                </div>


            </div>

        </div>
    }
}

export default Education