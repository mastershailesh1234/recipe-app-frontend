import React from "react";
import { Nav, NavLink, NavIcon, Bars, NavRight } from "./NavbarElements";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css";
const Navbar = ({ toggle }) => {
  const { user } = useContext(AuthContext);

  const logout = () => {
    localStorage.removeItem("user");
    window.open("/", "_self");
  };

  const login = () => {
    window.open("/login", "_self");
  };
  const register = () => {
    window.open("/register", "_self");
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
