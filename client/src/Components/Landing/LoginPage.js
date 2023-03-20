import React from "react";
import { useNavigate } from "react-router-dom";

import "./LoginPage.css";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import VerificationForm from "./Verification";
import ForgotPasswordForm from "./ForgotPassword";

function LoginPage(props) {
  const navigate = useNavigate();

  return (
    <div className="modal">
      <div className="login-container">
        <div className="total-form-container">
          <div className="login-form-close">
            <span
              className="login-form-close-btn"
              onClick={() => {
                navigate("/");
              }}
            >
              X
            </span>
          </div>
          <div id="log" className="login-form-container">
            {props.formType === "login" && <LoginForm />}
            {props.formType === "register" && <RegisterForm />}
            {props.formType === "verify" && <VerificationForm />}
            {props.formType === "forgot" && <ForgotPasswordForm />}
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
