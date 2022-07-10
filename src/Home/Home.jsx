import React, { Component} from 'react';
import "./Home.css"
import App from './App.jsx';

export default class Home extends Component {

    render() {
        return (
            <div className="home" id="home">
                <div className="homeimg">
                    <div className="home-content">
                        <h3>
                            Hello i'm 
                        </h3>
                        <h3>
                           <App/>
                        </h3>
                        <a href="https://drive.google.com/file/d/1yhYUkCIRQD0eMAf0RBlw9Lrwi_qmrrGZ/view?usp=sharing">
                            <button className='CVbtn'
                                href="www.google.com">Download
                                CV
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
