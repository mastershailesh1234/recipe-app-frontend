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
} from "../components/Entry/EntryElements";
import useFetch from "../hooks/useFetch";
function FullMenu() {
  const { data, loading, error } = useFetch("/recipe/");
  const [isOpen, setIsOpen] = useState(false);

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
          <EntryH1>ALL RECIPES </EntryH1>
        </EntryItems>
      </EntryContainer>
      {loading ? (
        "loading"
      ) : (
        <>
          <Products data={data} />
        </>
      )}
      <Footer />
    </div>
  );
}

export default FullMenu;
