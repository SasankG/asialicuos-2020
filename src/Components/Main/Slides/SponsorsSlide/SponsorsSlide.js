import React, { Component } from 'react'
import decalTwo from '../../../../Assets/Images/AsialiciousDecal02.png'
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
                                <p className="styleLines">______________________________</p>

                            </div>

                        </div>


                        <div className="SponsorsSlide-SponsorBox">

                            <div class="card">
                                <img class="card-img-top" src={decalTwo} alt="Card image cap"/>
                                    <div class="card-body">
                                        <h5 class="card-title">Sponsor</h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                                        <a href="#" class="btn btn-primary">Link</a>
                                    </div>
                            </div>
                            <div class="card">
                                <img class="card-img-top" src={decalTwo} alt="Card image cap"/>
                                    <div class="card-body">
                                        <h5 class="card-title">Sponsor</h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                                        <a href="#" class="btn btn-primary">Link</a>
                                    </div>
                            </div>
                            <div class="card">
                                <img class="card-img-top" src={decalTwo} alt="Card image cap"/>
                                    <div class="card-body">
                                        <h5 class="card-title">Sponsor</h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                                        <a href="#" class="btn btn-primary">Link</a>
                                    </div>
                            </div>
                            <div class="card">
                                <img class="card-img-top" src={decalTwo} alt="Card image cap"/>
                                    <div class="card-body">
                                        <h5 class="card-title">Sponsor</h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                                        <a href="#" class="btn btn-primary">Link</a>
                                    </div>
                            </div>

                        </div>

                        </div>

                    </div>

                </div>
        )
    }
}
