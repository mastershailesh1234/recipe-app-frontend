import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import { useRef } from "react";
import {
  EntryContainer,
  EntryContent,
  EntryItems,
  EntryH1,
  EntryP,
  EntryBtn,
  EntryLink,
} from "../../components/Entry/EntryElements";
import Footer from "../../components/Footer/Footer";
import { GlobalStyle } from "../../globalStyles";
const Login = () => {
  const password = useRef();
  const username = useRef();
  const { loading, error, dispatch } = useContext(AuthContext);
  const next = () => {
    window.open("/register", "_self");
  };
  const navigate = useNavigate();

  const handleClick = async (e) => {
    const user = {
      username: username.current.value,
      password: password.current.value,
    };
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", user);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div>
      <GlobalStyle />
      <EntryContainer>
        <Navbar />
        <EntryContent>
          <EntryItems>
            <form onSubmit={handleClick}>
              <EntryH1>LOGIN </EntryH1>
              <input
                type="text"
                placeholder="username"
                id="Username"
                ref={username}
                className="loginInput"
              />
              <input
                type="password"
                placeholder="password"
                id="Password"
                ref={password}
                className="loginInput"
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <EntryBtn disabled={loading} type="submit">
                  Login
                </EntryBtn>
                <EntryBtn disabled={loading} type="submit" onClick={next}>
                  Register
                </EntryBtn>
              </div>
            </form>
          </EntryItems>
        </EntryContent>
        {error && <span>{error.message}</span>}
        <Footer />
      </EntryContainer>
    </div>
  );
};

export default Login;
