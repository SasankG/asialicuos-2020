import React, { Component } from 'react'
import './SponsorsSlide.css'
import '../Slides.css'

// Sponsors Component
//  - all Sponsors listed here
//  - Sponsors are stored in Bootstrap cards

export default class SponsorsSlide extends Component {
    render() {
        return (
            <div>

                <div className="Slide">

                    <div className="SponsorsSlide" id="Sponsors">

                        <div className="SponsorsSlide-TextBox">

                            <div className="SponsorsSlide-TextBox-TitleBox">
                                <p className="SponsorsSlide-TextBox-Title">Sponsors</p>
                            </div>

                        </div>

                        <div className = "SponsorsSlide-SponsorBox">

                            {/* TODO:
                            - display sponsors using bootstrap cards */}

                        </div>

                    </div>

                </div>

            </div>
        )
    }
}
