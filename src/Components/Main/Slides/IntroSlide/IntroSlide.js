import React, { Component } from 'react'
import poster from '../../../../Assets/Images/AsialiciousWebsiteFront.jpg'
import './IntroSlide.css'
import '../Slides.css'

// IntroSlide Component
//  - Introduction "page"
//  - Contains title text, subtitle text, and background Image

export default class IntroSlide extends Component {
    render() {
        return (
            <div>
                <div className = "Slide">

                    {/* TODO: 
                    - add background image carousel
                     */}
                    <div className = "IntroSlide">

                        <img src={poster} alt = "Poster" className="IntroSlide-Poster"/>

                        <div className = "IntroSlide-TextBox">


                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
