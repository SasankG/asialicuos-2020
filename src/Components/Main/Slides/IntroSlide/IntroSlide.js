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
                    - add background image
                    - add title text
                    - add subtitle text */}
                    <div className = "IntroSlide">

                        <img src={poster} alt = "Poster" className="IntroSlide-Poster"/>

                        <div className = "IntroSlide-TextBox">

                            {/* <div className = "IntroSlide-TextBox-TitleBox">
                                <p id= "IntroSlide-TextBox-Title">AsialiciousTO 2020</p>
                            </div>


                            <div className = "IntroSlide-TextBox-SubTitleBox">
                                <p id= "IntroSlide-TextBox-SubTitle">April 18th - May 31st</p>
                            </div> */}

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
