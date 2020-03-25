import React, { Component } from 'react'
import './VendorsSlide.css'
import '../Slides.css'

// VendorsComponent
//  - all Vendors are listed here
//  - the form to query for vendors is inside a Bootstrap Card
//      - the form queries from the Google Sheets API
//      - all retrieved restaurents are stores in the VendorsSlide-VendorList div 

export default class VendorsSlide extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isBeta: true
        }

    }

    render() {

        let form;

        if (this.state.isBeta === true) {

            form =

            <div className="Coming Soon">
                Coming Soon!
            </div>

        } else {

            form =
                <div className='card form-card' >
                    <p className="VendorsSlide-TextBox-CardTitle">Search Vendors</p>
                    <form>
                        <div className="form-group">
                            <label for="restaurent-name">Restaurent Name</label>
                            <input type="text" className="form-control" id="restaurent-name"></input>
                        </div>
                        <div className="form-group">
                            <label for="location">Location</label>
                            <input type="text" className="form-control" id="location"></input>
                        </div>
                        <div className="form-group">
                            <label for="location">Price</label>
                            <input type="text" className="form-control" id="location"></input>
                        </div>
                    </form>
                </div>

        }

        return (
            <div>

                <div className="Slide">

                    <div className="VendorsSlide" id="Vendors">

                        <div className="VendorsSlide-TextBox">

                            <div className="VendorsSlide-TextBox-TitleBox">
                                <p className="VendorsSlide-TextBox-Title">Vendors</p>
                                <p className="styleLines">______________________________</p>
                            </div>

                            <div className="VendorsSlide-VendorFormBox">
                                {form}
                            </div>

                        </div>


                        <div className="VendorsSlide-VendorList">

                            {/* TODO:
                            - retrieve and display vendors from Google Sheet */}

                        </div>

                    </div>

                </div>


            </div >
        )
    }
}
