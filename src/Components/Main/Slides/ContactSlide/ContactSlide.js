import React, { Component } from 'react'
import './ContactSlide.css'
import '../Slides.css'

// Contact Component
// - contains:
//      - contact form
//      - TODO: add funcitonality to contact form

export default class ContactSlide extends Component {

    constructor(props) {
        super(props)

        this.state = {

            contactName: '',
            email: '',
            number: '',
            subject: '',
            message: ''

        }

    }

    nameUpdate(e) {
        this.setState({
            contactName: e.target.value
        })
    }

    emailUpdate(e) {
        this.setState({
            email: e.target.value
        })
    }

    numberUpdate(e) {
        this.setState({
            number: e.target.value
        })
    }

    messageUpdate(e) {
        this.setState({
            message: e.target.value
        })
    }

    subjectUpdate(e) {
        this.setState({
            subject: e.target.value
        })
    }


    handleSubmit(e) {

        e.preventDefault();

        console.log(this.state)

        // TODO: send email, figure it out Anthony

        // clear state after you send the email
        this.setState({
            contactName: '',
            email: '',
            number: '',
            subject: '',
            message: ''
        })

    }

    render() {
        return (
            <div>

                <div className="Slide">

                    <div className="ContactSlide" id="Contact">

                        <div className="ContactSlide-TextBox-TitleBox">

                            <p className="ContactSlide-TextBox-Title">Contact</p>
                            <p className="styleLines">______________________________</p>

                        </div>

                        <div className="ContactSlide-ContactForm">
                            <form onSubmit={(e) => this.handleSubmit(e)}>
                                <div className="form-row col-lg-12">

                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control" id="contactName" placeholder="Contact Name" value={this.state.contactName} onChange={(e) => this.nameUpdate(e)} required />
                                    </div>

                                    <div className="form-group col-md-4">
                                        <input type="email" className="form-control" id="email" placeholder="Email" value={this.state.email} onChange={(e) => this.emailUpdate(e)} required />
                                    </div>

                                    <div className="form-group col-md-3">
                                        <input type="tel" className="form-control" id="number" placeholder="Phone Number" value={this.state.number} onChange={(e) => this.numberUpdate(e)} />
                                    </div>

                                    <div className="form-group col-md-12">
                                        <input type="text" className="form-control" id="subject" placeholder="Subject" value={this.state.subject} onChange={(e) => this.subjectUpdate(e)} required />
                                    </div>

                                    <div className="form-group col-md-12">
                                        <textarea className='form-control' id="message" placeholder='Message' rows='8' value={this.state.message} onChange={(e) => this.messageUpdate(e)}></textarea>
                                    </div>

                                    <br />
                                    <br />

                                    <div className='col text-center'>
                                        <button type="submit" className="btn" id="submitButton">Submit</button>
                                    </div>

                                </div>
                            </form>
                        </div>

                    </div>

                </div>

            </div>
        )
    }
}
