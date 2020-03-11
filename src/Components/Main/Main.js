import React, { Component } from 'react'
import './Main.css'
import Navbar from './Navbar/Navbar';
import IntroSlide from './Slides/IntroSlide/IntroSlide';
import AboutSlide from './Slides/AboutSlide/AboutSlide';
import SponsorsSlide from './Slides/SponsorsSlide/SponsorsSlide';
import VendorsSlide from './Slides/VendorsSlide/VendorsSlide';
import ContactSlide from './Slides/ContactSlide/ContactSlide';

// Main Webpage Component
//  - This component contains the entirety of the webpage
//  - all components are imported and rendered here

export default class Main extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <div data-spy="scroll" data-target="navbar fixed-top navbar-expand-lg shadow-sm p-3 mb-5 navbar-small" data-offset="0">
                    <IntroSlide />
                    <AboutSlide />
                    <SponsorsSlide />
                    <VendorsSlide />
                    <ContactSlide />
                </div>
            </div>
        )
    }
}
