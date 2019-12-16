import React, { Component } from 'react'
import '../styles/ProjectCard.css'

class ProjectCard extends Component {

    render() {
        return <div className="ProjectCard">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <h1>{this.props.name}</h1>
                    </div>
                    <div className="flip-card-back">

                        <a href={this.props.url} className="btn btn-white" onClick={this.punchHandler}>Launch</a>
                        <br />
                        <a href={this.props.gitHub} className="btn btn-white" onClick={this.punchHandler}>View Code</a>

                    </div>
                </div>
            </div>
        </div>
    }
}

export default ProjectCard
