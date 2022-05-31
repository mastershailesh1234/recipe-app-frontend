import axios from "axios";
import { useRef } from "react";
import "./register.css";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import {
  EntryContainer,
  EntryContent,
  EntryItems,
  EntryH1,
  EntryBtn,
} from "../../components/Entry/EntryElements";
import { GlobalStyle } from "../../globalStyles";
import Footer from "../../components/Footer/Footer";
export default function Register() {
  const navigate = useNavigate();
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const next = () => {
    navigate("/login");
  };
  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      console.log(user);
      try {
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
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
              <EntryH1>Register </EntryH1>
              <input
                placeholder="Username"
                required
                ref={username}
                className="loginInput"
              />
              <input
                placeholder="Email"
                required
                ref={email}
                className="loginInput"
                type="email"
              />
              <input
                placeholder="Password"
                required
                ref={password}
                className="loginInput"
                type="password"
                minLength="6"
              />
              <input
                placeholder="Password Again"
                required
                ref={passwordAgain}
                className="loginInput"
                type="password"
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <EntryBtn type="submit">Login</EntryBtn>
                <EntryBtn type="submit" onClick={next}>
                  Register
                </EntryBtn>
              </div>
            </form>
          </EntryItems>
        </EntryContent>
        <Footer />
      </EntryContainer>
    </div>
  );
}
