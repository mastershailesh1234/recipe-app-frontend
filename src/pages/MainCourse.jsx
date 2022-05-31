import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Products from "../components/Products/Products";
import { GlobalStyle } from "../globalStyles";
import * as All from "../components/Products/data";
import Feature from "../components/Feature/Feature";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import {
  EntryContainer,
  EntryItems,
  EntryH1,
  EntryP,
} from "../components/Entry/EntryElements";
import useFetch from "../hooks/useFetch";
function MainCourse() {
  const [isOpen, setIsOpen] = useState(false);
  const { data, loading, error } = useFetch(
    "recipe/category?category=maincourse"
  );
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <GlobalStyle />
      <EntryContainer>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <EntryItems>
          <EntryH1>Main Course Recipes</EntryH1>
          <EntryP>
            Biryani, Noodles, Veg Curry, Non-veg Curry, Fride Rice, Indian
            Breads etc
          </EntryP>
        </EntryItems>
      </EntryContainer>

      <Products data={data} />

      <Footer />
    </div>
  );
}

export default MainCourse;
