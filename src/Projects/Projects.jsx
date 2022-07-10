import React, { Component } from 'react'
import "./Projects.css"

 
export default class Projects extends Component {
    render() {
        return (
            <div class="projects" id="projects">
                <h2 class="title">project</h2>
                <div class="projectcontainer">
                    <div class="pcart">
                        <h3>Click Game</h3>
                        <img src={require("../images/mitul_black.png")} alt="" />
                        <p>It is develoed using react js. with the help of states. In this game user have click any 3 button out of 9 button to win the game in such that the sum will get greater than 10 otherwise user will lost 
                        </p>
                        <button className='pbtn'>
                            <a href="https://g3mrdv.csb.app/" target="_blanck">
                            Know more
                            </a>
                        </button>
                    </div>

                    <div class="pcart">
                        <h3>React API call</h3>
                        <img src={require("../images/mitul_black.png")} alt="" />
                        <p>React api call project using git hub api. It show user profile , repositary email and address </p>
                        <button className='pbtn'>
                            <a href="https://rpz91s.csb.app/" target="_blanck">
                            Know more
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
