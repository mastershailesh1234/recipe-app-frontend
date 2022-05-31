import React from "react";
import { Nav, NavLink, NavIcon, Bars, NavRight } from "./NavbarElements";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css";
const Navbar = ({ toggle }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const login = () => {
    navigate("/login");
  };
  const register = () => {
    navigate("/register");
  };
  return (
    <>
      <Nav>
        <NavLink to="/">
          <FavoriteIcon />
          FOOD
          <FavoriteIcon />
        </NavLink>
        {user ? (
          <NavRight>
            <button className="navButton" onClick={logout}>
              LOGOUT
            </button>
            <div>{user.username}</div>

            <NavIcon onClick={toggle}>
              <Bars />
            </NavIcon>
          </NavRight>
        ) : (
          <NavRight>
            <NavIcon>
              <button className="navButton" onClick={register}>
                Register
              </button>
              <button className="navButton" onClick={login}>
                Login
              </button>
            </NavIcon>
          </NavRight>
        )}
      </Nav>
    </>
  );
};

export default Navbar;
