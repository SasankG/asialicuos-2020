import * as emailjs from "emailjs-com";

/**
 * A helper to send emails associated with a specific account from emailjs
 *
 * Reference link: https://medium.com/@eesh.t/send-email-using-emailjs-and-react-form-9993bb6929d8
 * Emailjs login:
 *  - flamezraider@gmail.com
 *  - asialicious2020
 */

const TEMPLATE_KEY = "template_4TB2w960";
const USER_ID = "user_oYPzMsYZE7JQaGocN2SUz";

class TemplateParams {
  constructor(fromName, toName, subject, messageHtml) {
    this.from_name = fromName;
    this.to_name = toName;
    this.subject = subject;
    this.message_html = messageHtml;
  }
}

const EmailHelper = (function() {
  const module = {};

  // Currently hardcoded service. can be modified
  module.sendEmail = async function(fromName, toName, subject, messageHtml) {
    const templateParams = new TemplateParams(fromName, toName, subject, messageHtml);
    return emailjs.send("gmail", TEMPLATE_KEY, templateParams, USER_ID);
  };

  return module;
})();

export default EmailHelper;
