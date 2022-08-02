import React, { Component } from 'react';
import "./Skills.css"

class Skills extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    name: "python",
                    img: require("../images/python.png"),
                    persantage: 65 + "%"
                },
                {
                    name: "c++",
                    img: require("../images/c++.png"),
                    persantage: 60 + "%"
                },
                {
                    name: "html",
                    img: require("../images/html.png"),
                    persantage: 85 + "%"
                },
                {
                    name: "css",
                    img: require("../images/css.png"),
                    persantage: 80 + "%"
                },
                {
                    name: "javascript",
                    img: require("../images/javascript.png"),
                    persantage: 70 + "%"
                },
                {
                    name: "MEAN",
                    img: require("../images/MEAN.png"),
                    persantage: 70 + "%"
                },
            ]
        }
    }
    render() {
        return (
            <div class="skills" id="skills">
                <div class="backgroundOptacity">
                    <h2 class="title">Skills</h2>
                    <div class="skillContainer">
                        {
                            this.state.data.map(item => (
                                < div class="skillItem" >
                                    <h2>{item.name}<span><img src={item.img} alt={item.name} /></span></h2>
                                    <div class="progress-indicater">
                                        <span id={item.name} style={{ width: item.persantage }} class="progress"></span>
                                        <span class="persantage">{item.persantage}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div >
        );
    }
}

export default Skills;