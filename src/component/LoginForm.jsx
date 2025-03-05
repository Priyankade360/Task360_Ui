import React from "react";
import "./styles/LoginForm.css";

import Logo from './Assets/360logo.svg';
import Frame from './Assets/Frame.png';
import google from './Assets/google.svg';
import microsoft from './Assets/microsoft-icon.svg';
import appstore from './Assets/apple-app-store.svg';

const LoginForm = ({ onLogin }) => {
  return (
    <div className="login-container">
      <div className="login-left">
        <img src={Logo} alt=" " className="login-logo" />
        <h2>Welcome Back</h2>
        <p>Welcome back! Please enter your details</p>
        <form className="login-form" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
          <label>Email</label>
          <input type="email" placeholder="example@businessdomain.com" />
          <button type="submit">Sign In</button>
          <div className="separator">---- or sign in with ----</div>
          <div className="social-icons">
            <img src={google} alt=" " />
            <img src={microsoft} alt=" " />
            <img src={appstore} alt=" " />
          </div>
        </form>
      </div>

      <div className="login-right">
        <img src={Frame} alt=" " className="login-image" />
      </div>
    </div>
  );
};

export default LoginForm;
