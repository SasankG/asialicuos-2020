import React, { Component } from "react";
import Footer from '../Footer/Footer'
import {
  Link
} from 'react-router-dom';
import poster from '../../../Assets/Images/AsialiciousWebsiteFront.jpg'
import "./LandingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div>

        <div className="LandingPage-Main">

          <div className="LandingPage-PosterBox">
            <div className="LandingPage-PosterBox-ImageBox">
              <img src={poster} alt="Poster" className="LandingSlide-Poster" />
            </div>
          </div>

          <div>
            <Link to="/home">
              <button className="LandingPage-HomeBtn btn">AsialiciousTO Home</button>
            </Link>
          </div>

          <div className="LandingPage-Footer">
            <Footer />
          </div>

        </div>

      </div>
    );
  }
}
