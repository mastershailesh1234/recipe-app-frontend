import React, { useState } from "react";
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
function SoupStarter() {
  const [isOpen, setIsOpen] = useState(false);
  const { data, loading, error } = useFetch(
    "https://shailesh-recipe-app.herokuapp.com/api/recipe/category?category=soupstarter"
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
          <EntryH1>Stater And Soups Recipes </EntryH1>
          <EntryP>Soup, Veg and Non-Veg Stater, Tikka</EntryP>
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

export default SoupStarter;
