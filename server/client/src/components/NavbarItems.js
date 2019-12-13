import React, { Component } from 'react'
import '../styles/NavbarItems.css'
import { Link, animateScroll as scroll } from "react-scroll";

class NavbarItems extends Component {

    render() {
        return <div className="NavbarItems">
            <Link
                activeClass={this.props.active}
                to={this.props.to}
                spy={this.props.spy}
                smooth={this.props.smooth}
                offset={this.props.offset}
                duration={this.props.duration}
                className={this.props.classNm}
            >{this.props.text}</Link>
        </div>
    }
}

export default NavbarItems