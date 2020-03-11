import React, { Component } from 'react'
import logoPink from '../../../../Assets/Images/logo-pink.png'
import './AboutSlide.css'
import '../Slides.css'

export default class AboutSlide extends Component {
    render() {
        return (
            <div>
                <div className="Slide">

                    {/* TODO: 
                        - add images (maybe carousel)
                        - add blurb */}
                    <div className="AboutSlide" id = "About">

                        <div className="AboutSlide-TextBox">

                            <div className="AboutSlide-TextBox-TitleBox">
                                <p id="AboutSlide-TextBox-Title">About AsialiciousTO</p>
                            </div>

                            {/* TEMPORARY IMAGE */}
                            <div className="AboutSlide-ImageBox">
                                <img src={logoPink} alt="logo" style={{ maxHeight: 40 }} />
                                <br />
                                <br />

                            </div>

                            <div className="AboutSlide-TextBox-Blurb">
                                <p id="AboutSlide-TextBox-Blurb">
                                    The Asian Canadian Community is one of the fastest growing communities in Canada with a significant presence in the City of Toronto.
                                </p>
                                <br />
                                <p className = "styleLines">__________________________________________</p>
                                <p id="AboutSlide-TextBox-Blurb">
                                    This year, due to the outbreak of coronavirus in Wuhan China, fears and rumours surrounding the virus have spread and many Asian restaurants businesses in Toronto have been suffering a 20% to 50% drop in sales, and possible increase. Through AsialiciousTO, we aim to boost sales at restaurants and stores that are suffering from the virus outbreak, revitalize the local economy and bringing the community together.
                                    Activities
                                </p>
                                <p className = "styleLines">__________________________________________</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
