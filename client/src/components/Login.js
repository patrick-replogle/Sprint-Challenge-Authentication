import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialLoginState = {
  username: "",
  password: ""
};

const Register = props => {
  const [loginData, setLoginData] = useState(initialLoginState);

  const handleChange = e => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/auth/login", loginData)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        props.history.push("/dashboard");
      })
      .catch(err => {
        console.log("err registering: ", err);
      });
  };

  return (
    <div className="register">
      <h1>Login Below</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={loginData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={loginData.password}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;
