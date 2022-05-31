import React, { useState } from "react";
import { GlobalStyle } from "../globalStyles";
import Footer from "../components/Footer/Footer";
import Category from "../components/Category/Catergory";

function Landing() {
  return (
    <div>
      <GlobalStyle />
      <h1 style={{ padding: "1 rem", textAlign: "center" }}>Our Menu</h1>
      <Category />
      <Footer />
    </div>
  );
}

export default Landing;
