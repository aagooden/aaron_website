import React, { Component } from 'react'
import '../styles/AboutMe.css'

class AboutMe extends Component {
    render() {
        return <div className="AboutMe">
            <div className="about-me-header">
                <h1>About Me</h1>
            </div>

            <section className="content-block style-2">
                <div className="wrapper">
                    <img className="figure" src={require('../images/passion.png')} />
                    <h2>What aspects of your work are you most passionate about and why?</h2>
                    <p>I have three passions - cutting edge technology, collaboration, and learning.  I love cutting edge technology because it is changing the world.  I become a part of that change through learning and applying knowledge in collaboration with others.  There is nothing better than making something big happen with a team of people.</p>
                </div>
            </section>

            <section className="content-block style-2">
                <div className="wrapper">
                    <img className="figure" src={require('../images/mission-accomplished.png')} />
                    <h2>What do you consider some of your biggest professional and personal accomplishments?</h2>
                    <p>My biggest accomplishment is the fact that I am currently in tech at all.  I resigned my job a few years ago to persue a career in tech as a second career.  It's been a challenging journey and I am thrilled to be finding my way.  </p>
                </div>
            </section >

            <section className="content-block style-2">
                <div className="wrapper">
                    <img className="figure" src={require('../images/loupe.png')} />
                    <h2>What are you looking for right now?</h2>
                    <p>I'm looking for a company that places high value on cutting edge technology, collaboration, and learning.  I would love to work with a great team on an exciting project.</p>
                </div>
            </section >
        </div >
    }
}

export default AboutMe



