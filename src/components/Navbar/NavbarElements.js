import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

export const Nav = styled.nav`
  border-top: 0.5vh solid black;
  background: gold;
  height: 70px;
  display: flex;
  justify-content: center;
  font-weight: 400;
  position: fixed;
  width: 100vw;
`;

export const NavLink = styled(Link)`
  color: black;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  position: absolute;
  top: 18px;
  left: 15px;
`;
export const NavRight = styled.div`
  height: 100%;
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  margin: 0 10px;
  align-items: center;
  justify-content: center;
`;
export const NavIcon = styled.div`
  cursor: pointer;
  color: black;
  margin: 10px;

  /* p {
    transform: translate(-175%, 100%);
    // font-weight: bold;
  } */
`;

export const Bars = styled(FormatListBulletedIcon)`
  font-size: 2rem;
  transform: translate(10%, 15%);
`;
