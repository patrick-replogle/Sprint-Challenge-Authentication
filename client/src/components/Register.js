import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialRegisterState = {
  username: "",
  password: ""
};

const Register = props => {
  const [registerData, setRegisterData] = useState(initialRegisterState);

  const handleChange = e => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/auth/register", registerData)
      .then(res => {
        props.history.push("/login");
      })
      .catch(err => {
        console.log("err registering: ", err);
      });
  };

  return (
    <div className="register">
      <h1>Register a new User Below:</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={registerData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={registerData.password}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;
