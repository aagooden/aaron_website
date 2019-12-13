import React, { Component } from 'react'
import '../styles/ProjectBox.css'
import ProjectCard from './ProjectCard.js'

class ProjectBox extends Component {
    render() {
        return <div className="ProjectBox">
            <div className="portfolio-header">
                <h1>Projects</h1>
            </div>
            <div className="box-container">
                <div className="project-cards">
                    <ProjectCard
                        name="Tic Tac Toe"
                        url="https://ag-tictactoe.herokuapp.com/"
                        image="Some Image"
                        gitHub="https://github.com/aagooden/web_tictactoe_2"
                    />
                </div>
            </div>
        </div>

    }
}

export default ProjectBox