import React, { Component } from "react";
import "./ContactSlide.css";
import "../Slides.css";

// Contact Component
// - contains:
//      - contact form
//      - TODO: add funcitonality to contact form
export default class ContactSlide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactName: "",
      email: "",
      number: "",
      subject: "",
      message: ""
    };
  }

  updateField(fieldName, event) {
    const { value } = event.target;
    // sanitization can be done here

    this.setState(prevState => {
      const newState = { ...prevState };
      newState[fieldName] = value;
      return newState;
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Submission state", this.state);

    // TODO: send email, figure it out Anthony

    // clear state after you send the email
    this.setState({
      contactName: "",
      email: "",
      number: "",
      subject: "",
      message: ""
    });
  }

  // ===== Renders =====

  // Text Area renders and their wrappers
  renderInput = (type, fieldName, placeholder, isRequired) => (
    <input
      type={type}
      className="form-control"
      id={fieldName}
      placeholder={placeholder}
      value={this.state[fieldName]}
      onChange={this.updateField.bind(this, fieldName)}
      required={isRequired}
    />
  );

  renderInputContactName = () => this.renderInput("text", "contactName", "Contact Name", true);
  renderInputEmail = () => this.renderInput("email", "email", "Email", true);
  renderInputPhoneNumber = () => this.renderInput("tel", "number", "Phone Number", false);
  renderInputSubject = () => this.renderInput("text", "subject", "Subject", true);

  // Text Area renders and their wrappers
  renderTextArea = (rows, fieldName, placeholder) => (
    <textarea
      className="form-control"
      id={fieldName}
      placeholder={placeholder}
      rows={rows}
      value={this.state[fieldName]}
      onChange={this.updateField.bind(this, fieldName)}
    ></textarea>
  );

  renderTextAreaMessage = () => this.renderTextArea("8", "message", "Message");

  // Button type renders. Wrapper not needed atm
  renderButtonSubmit = () => (
    <button type="submit" className="btn" id="submitButton">
      Submit
    </button>
  );

  render() {
    return (
      <div className="Slide">
        <div className="ContactSlide" id="Contact">
          <div className="ContactSlide-TextBox-TitleBox">
            <p className="ContactSlide-TextBox-Title">Contact</p>
            <p className="styleLines">______________________________</p>
          </div>

          <form className="ContactSlide-ContactForm" onSubmit={e => this.handleSubmit(e)}>
            <div className="form-row col-lg-12">
              <div className="form-group col-md-4">{this.renderInputContactName()}</div>
              <div className="form-group col-md-4">{this.renderInputEmail()}</div>
              <div className="form-group col-md-3">{this.renderInputPhoneNumber()}</div>

              <div className="form-group col-md-12">{this.renderInputSubject()}</div>
              <div className="form-group col-md-12">{this.renderTextAreaMessage()}</div>

              <div className="col text-center">{this.renderButtonSubmit()}</div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
