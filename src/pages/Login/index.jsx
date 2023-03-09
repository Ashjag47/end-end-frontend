import React from "react";
import { LoginBox } from "../../components";
import img from "../../constants/images";
import "./Login.css";

function Login() {
  return (
    <div className="login-page">
      <div className="login-img">
        <img src={img.login} alt="login" />
        <div className="circle"> .</div>
        <div className="circle-small"> .</div>
        <div className="circle-left"> .</div>
        <div className="circle-small-left"> .</div>
      </div>
      <div className="login-box">
        <LoginBox />
      </div>
    </div>
  );
}

export default Login;
