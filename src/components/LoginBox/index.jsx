/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import makeRequest from "../../utils/makeRequest";
import { LOGIN } from "../../constants/apiEndpoints";
import "./LoginBox.css";

function LoginBox() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  const [userInfo, setUserInfo] = useState();
  console.log(userInfo);
  const onSubmit = (data) => {
    setUserInfo(data);
    makeRequest(
      LOGIN,
      navigate,
      {
        data: {
          email: data.email,
          password: data.password,
        },
      },
      "token"
    ).then((response) => {
      localStorage.setItem("token", JSON.stringify(response.token));
      navigate("/content");
    });
  };
  return (
    <div className="login">
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="title">Login to your CMS+ account</h1>
          <div className="field">
            <label htmlFor="" className="email">
              Email
            </label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                minLength: {
                  value: 7,
                  message: "Email must be at least 7 characters",
                },
              })}
            />
            <span className="error">
              {errors.email && errors.email.message}
            </span>
          </div>
          <div className="field">
            <label htmlFor="" className="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
            <span className="error">
              {errors.password && errors.password.message}
            </span>
          </div>
          <div className="button-log" type="submit">
            <button className="button-login">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginBox;
