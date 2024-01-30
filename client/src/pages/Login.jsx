import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/Trident-logos_transparent4.png";

import { UserContext } from "../context/userContext";

function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const baseUrl = "https://trident-blog-api.onrender.com/api";

  const { setCurrentUser } = useContext(UserContext);

  const changeInputHandler = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const loginUser = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(`${baseUrl}/users/login`, userData);
      const user = await response?.data;
      setCurrentUser(user);
      navigate("/");
    } catch (error) {
      setError(error?.response?.data?.message);
    }
  };

  return (
    <section className="login sign-form__container">
      <div className="sign-form__logo">
        <img src={logo} alt="" />
      </div>
      <div className="container">
        <h2>Sign In</h2>
        <form className="form login__form" onSubmit={loginUser}>
          {error && <p className="form__error-message">{error}</p>}

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={changeInputHandler}
            autoFocus
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={changeInputHandler}
          />

          <div className="btn__wrapper">
            <button type="submit" className="btn primary">
              Login
            </button>
          </div>
        </form>
        <small>
          Don't have an account? <Link to="/register">sign Up</Link>
        </small>
      </div>
    </section>
  );
}

export default Login;
