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
                        <h1>Project Card</h1>
                        <a href={this.props.url}>Launch App</a>
                        <br />
                        <a href={this.props.gitHub}>Github Repo</a>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default ProjectCard
