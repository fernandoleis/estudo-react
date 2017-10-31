import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';

import { Link } from 'react-router-dom';

class App extends Component {

    render() {
        console.log("render");
        return (
            <div id="layout">
                <a href="#menu" id="menuLink" className="menu-link">
                    <span></span>
                </a>
                <div id="menu">
                    <div className="pure-menu">
                        <a className="pure-menu-heading" href="#">Company</a>
                        <ul className="pure-menu-list">
                            <li className="pure-menu-item"><Link to="/" className="pure-menu-link">Home</Link></li>
                            <li className="pure-menu-item"><Link to="/autor" className="pure-menu-link">Autor</Link></li>
                            <li className="pure-menu-item"><Link to="/livro" className="pure-menu-link">Livro</Link></li>
                            <li>aa</li>
                        </ul>
                    </div>
                </div>
                <div>11111</div>
                {/* <div id="main">
                    <div className="header">
                        opa{this.props.children}
                    </div>
                    <div className="content" id="content">
                    
                    {this.props.children} 
                    </div>
                </div> */}
                <div>111122221</div>
                <div>88</div>
            </div>

        );
    }
}

export default App;