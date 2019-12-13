import React, { Component } from 'react'
import '../styles/Navbar.css'
import NavbarItems from './NavbarItems.js'
import { Link, animateScroll as scroll } from "react-scroll";

class Navbar extends Component {

    render() {
        function responsiveNav() {
            var x = document.getElementById("topNav");
            if (x.className === "nav-container") {
                x.className += " responsive";
            } else {
                x.className = "nav-container";
            }
        }
        return <div className="Navbar">
            <a href="javascript:void(0);" id="icon" onClick={responsiveNav}>&#9776;</a>
            <div className="nav-container" id="topNav">

                <NavbarItems
                    active="active"
                    to="Skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    classNm="nav-link"
                    text="Skills"
                />

                <NavbarItems
                    active="active"
                    to="ProjectBox"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    classNm="nav-link"
                    text="Projects"
                />

                <NavbarItems
                    active="active"
                    to="Experience"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    classNm="nav-link"
                    text="Experience"
                />

                <NavbarItems
                    active="active"
                    to="AboutMe"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    classNm="nav-link"
                    text="About"
                />

                <NavbarItems
                    active="active"
                    to="Education"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    classNm="nav-link"
                    text="Education"
                />

                <NavbarItems
                    active="active"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    classNm="nav-link"
                    text="Contact"
                />

            </div>

        </div >
    }
}

export default Navbar