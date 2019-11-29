import React, { Component } from 'react'
import '../styles/ProjectBox.css'
import ProjectCard from './ProjectCard.js'

class ProjectBox extends Component {
    render() {
        return <div classname="ProjectBox">
            <div class="project-cards">
                <ProjectCard
                    name="Tic Tac Toe"
                    url="Some URL"
                    image="Some Image"
                />
                <ProjectCard
                    name="Worship Text"
                    url="Some URL"
                    image="Some Image"
                />
                <ProjectCard
                    name="Tic Tac Toe"
                    url="Some URL"
                    image="Some Image"
                />
                <ProjectCard
                    name="Tic Tac Toe"
                    url="Some URL"
                    image="Some Image"
                />
            </div>
        </div>
    }
}

export default ProjectBox