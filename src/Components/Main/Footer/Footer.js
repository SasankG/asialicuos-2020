import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <div className="Footer">
        <div className="Footer-Email">info@asialiciousto.com</div>
        <div className="Footer-Links">
          <div className="Footer-Instagram">
            <i className="fab fa-instagram"></i>
          </div>

          <div className="Footer-Twitter">
            <i className="fab fa-twitter-square"></i>
          </div>

          <div className="Footer-FaceBook">
            <i className="fab fa-facebook-square"></i>
          </div>

          <div className="Footer-WeChat">
            <i className="fab fa-weixin"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
