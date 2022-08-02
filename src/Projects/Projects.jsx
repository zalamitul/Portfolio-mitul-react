import React, { Component } from 'react'
import "./Projects.css"


export default class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    title: "Click game",
                    img: require("../images/clickgame.png"),
                    about: "It is develoed using react js. with the help of states. In this game user have click any 3 button out of 9 button to win the game in such that the sum will get greater than 10 otherwise user will lost",
                    link: "https://zalamitul.github.io/click-game-react/"
                },
                {
                    title: "React API call",
                    img: require("../images/react-1-logo.png"),
                    about: "React api call project using git hub api. It show user profile , repositary email and address ",
                    link: "https://zalamitul.github.io/react-apicall-mitul/"
                },
                {
                    title: "QuestionDrop",
                    img: require("../images/questiondrop.png"),
                    about: "• Developed a QuestionDrop web-app using MEAN stack technology. Designed models using Mongoose for managing database and Implemented user account with authentication using ExpressJS middleware.<br>Implemented Filter by tags, Password Authentication using Bycrpt, Comments, Dynamic, APIs for displaying information like User API, Post for detail of question, etc",
                    link: "https://github.com/zalamitul/questiondrop"
                },
            ]
        }
    }
    render() {
        return (
            <div class="projects" id="projects">
                <h2 class="title">project</h2>
                <div class="projectcontainer">
                    {
                        this.state.data.map(item => (
                            <div class="pcart">
                                <h3>{item.title}</h3>
                                <img src={item.img} alt="" />
                                <p>{item.about}</p>
                                <a className='pbtn' href={item.link} target="_blanck">Know more</a>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
