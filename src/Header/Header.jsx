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
            windowHeight: 0,
            inputStyle: {
                display: "block"
            },
            data: [
                {
                    id: "#home",
                    name: "home",
                    img: require("../images/home.png")
                },
                {
                    id: "#academic",
                    name: "academic",
                    img: require("../images/academic.png")
                },
                {
                    id: "#skills",
                    name: "skills",
                    img: require("../images/skills.png")
                },
                {
                    id: "#projects",
                    name: "projects",
                    img: require("../images/projects.png")
                },
                {
                    id: "#services",
                    name: "services",
                    img: require("../images/services.png")
                },
                {
                    id: "#about",
                    name: "about",
                    img: require("../images/about.png")
                },
                
                {
                    id: "#contact",
                    name: "contact",
                    img: require("../images/contact.png")
                },
            ]
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
        return <>
            <div class="nav">
                <div class="logo">
                    <a href="/">
                        <img src={require("../images/mitul_black.png")} alt="logo" width="80px" />
                    </a>
                </div>
                <ul id="navul" style={this.state.clicked ? this.state.inputStyle : null} onClick={this.myClick}>
                    {
                        this.state.data.map(item => (
                            <a href={item.id}>
                                <li>
                                    <span>
                                        <img src={item.img} alt={item.alt} width="80px" />
                                    </span>
                                    {item.name}
                                </li>
                            </a>
                        ))
                    }
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