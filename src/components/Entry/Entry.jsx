import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import {
  EntryContainer,
  EntryContent,
  EntryItems,
  EntryH1,
  EntryP,
  EntryBtn,
  EntryLink,
} from "./EntryElements";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Entry = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const open = () => {
    if (user) {
      navigate("/Item");
    } else {
      navigate("/login");
    }
  };
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <EntryContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      {/* <Searchbar/> */}
      <EntryContent>
        <EntryItems>
          <EntryH1>
            Welcome To <FavoriteIcon />
            FOOD
            <FavoriteIcon />
            !!{" "}
          </EntryH1>
          <EntryP>The Recipe Encyclopedia</EntryP>
          <EntryBtn onClick={open}>VIEW RECIPES</EntryBtn>
        </EntryItems>
      </EntryContent>
    </EntryContainer>
  );
};

export default Entry;
