import React, { Component } from 'react'
import logoPink from '../../../Assets/Images/logo-pink.png'
import logoGrey from '../../../Assets/Images/logo-grey.png'
import "./Navbar.css"

// Navbar Component
//  - Navbar shrinks on scroll
//  - logo changes from pink to grey on scoll

export default class Navbar extends Component {
    constructor(){
        super();

        this.state = {
            class: 'navbar fixed-top navbar-expand-lg shadow-sm p-3 mb-5',
            logo: logoPink
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.getWindowHeight);
    }

    getWindowHeight = () => {

        const distY = window.pageYOffset || document.documentElement.scrollTop,
        minDist = 100;

        if(distY > minDist){
            this.setState({
                logo: logoGrey,
                class: "navbar fixed-top navbar-expand-lg shadow-sm p-3 mb-5 navbar-small"
            })
        } else {
            this.setState({
                logo: logoPink,
                class: "navbar fixed-top navbar-expand-lg shadow-sm p-3 mb-5"
            })
        }

    }

    render(){
        return (
            <div>
                <nav className={this.state.class} id = "Nav">
                    <img src={this.state.logo} alt="Logo" className="navlogo navbar-brand" />
                    <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="icon-bar top-bar"></span>
                        <span class="icon-bar middle-bar"></span>
                        <span class="icon-bar bottom-bar"></span>				                </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">HOME <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#About">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Sponsors">SPONSORS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Vendors">VENDORS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Contact">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
    
}
