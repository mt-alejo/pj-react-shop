import React from "react";
import "../styles/RecoveryPassword.scss";
import icon from "../../public/icons/email.svg";
import logo from "../../public/logos/logo_yard_sale.svg";

const RecoveryPassword = () => {
  return (
    <div className="RecoveryPassword">
      <div className="RecoveryPassword-container">
        <img src={logo} alt="logo" className="logo" />

        <h1 className="RecoveryPassword-title">Email has been sent!</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how to reset the password.
        </p>

        <div className="email-image">
          <img src={icon} alt="email" />
        </div>

        <button className="primary-button login-button">Login</button>

        <p className="resend">
          <span>Didn't receive the email?</span>
          <a href="/"> Resend</a>
        </p>
      </div>
    </div>
  );
};

export default RecoveryPassword;
