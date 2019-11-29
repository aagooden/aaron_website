import React, { Component } from 'react'
import '../styles/ProjectCard.css'

class ProjectCard extends Component {
    render() {
        return <div classname="ProjectCard">
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <h1>{this.props.name}</h1>
                    </div>
                    <div class="flip-card-back">
                        <h1>Project Card</h1>

                        <h2>{this.props.URL}</h2>
                        <h2>{this.props.image}</h2>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default ProjectCard
