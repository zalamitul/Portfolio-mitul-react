import { Component } from "react";
import React from "react";
import "./Header.css"

class Header extends Component {
    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    handleResize() {
        this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
    }
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            windowWidth: 0,
            windowHeight: 0
            // width:999
        };
        this.handleResize = this.handleResize.bind(this);
    }

    myClick = () => {
        if (this.state.clicked === false) {
            if (this.state.windowWidth > 820) {
                this.setState({ clicked: false });
            } else {
                this.setState({ clicked: true });
            }
        }
        else {
            this.setState({ clicked: false });
        }
    };
    render() {
        const inputStyle = {
            display: "block"
        };
        return <>
            <div class="nav">
                <div class="logo">
                    <a href="/">
                        <img src={require("../images/mitul_black.png")} alt="logo" width="80px" />
                    </a>
                </div>
                <ul id="navul" style={this.state.clicked ? inputStyle : null} onClick={this.myClick}>
                    <a href="#home">
                        <li>
                            <span>
                                <img src={require("../images/home.png")} alt="logo" width="80px" />
                            </span>
                            home
                        </li>
                    </a>
                    <a href="#academic">
                        <li>
                            <span>
                                <img src={require("../images/academic.png")} alt="logo" width="80px" />
                            </span>
                            academic
                        </li>
                    </a>
                    <a href="#skills">
                        <li>
                            <span>
                                <img src={require("../images/skill.png")} alt="logo" width="80px" />
                            </span>
                            skills
                        </li>
                    </a>
                    <a href="#projects">
                        <li>
                            <span>
                                <img src={require("../images/project.png")} alt="logo" width="80px" />
                            </span>
                            projects
                        </li>
                    </a>
                    <a href="#services">
                        <li>
                            <span>
                                <img src={require("../images/services.png")} alt="logo" width="80px" />
                            </span>
                            services
                        </li>
                    </a>
                    <a href="#about">
                        <li>
                            <span>
                                <img src={require("../images/about.png")} alt="logo" width="80px" />
                            </span> about
                        </li>
                    </a>
                    <a href="#contact">
                        <li>
                            <span>
                                <img src={require("../images/contact.png")} alt="logo" width="80px" />
                            </span>
                            contacts
                        </li>
                    </a>
                </ul>
                <div class="linesA"
                    onClick={this.myClick}
                >
                    <img src={require("../images/menu.png")} width="30px" height="30px" alt="" />
                </div>
            </div>
        </>
    }
}

export default Header