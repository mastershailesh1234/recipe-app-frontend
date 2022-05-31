import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GlobalStyle } from "../../globalStyles";
import Feature from "../../components/Feature/Feature";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { EntryContainer } from "../../components/Entry/EntryElements";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import useFetch from "../../hooks/useFetch";
import {
  ProductsContainer,
  ProductWrapper,
  ProductTitle,
  ProductCard,
  ProductInfo,
  ProductPrice,
} from "../../components/Products/ProductsElements";
import "./recipe.css";

import Sidebar from "../../components/Sidebar/Sidebar";
import nonveg from "../../images/veg.png";
import veg from "../../images/nonVeg.png";
const Recipe = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data, loading, error } = useFetch(`/recipe/find/${id}`);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <GlobalStyle />
      <div className="recipe">
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <div className="recipeContainer">
          <ProductWrapper>
            <div className="recipeCard">
              <ProductInfo>
                <h2>
                  {data.type == "true" ? (
                    <img
                      src={nonveg}
                      style={{ height: "15px", width: "15px" }}
                    />
                  ) : (
                    <img src={veg} style={{ height: "15px", width: "15px" }} />
                  )}
                  {data.name}
                </h2>
              </ProductInfo>
              <img
                src={`${data.photo}`}
                alt={data.name}
                className="recipeImage"
              />
              <CardContent className="cardContent">
                <h3>RECIPE</h3>
                <Typography variant="body2" color="text.secondary">
                  {data.recipe}
                </Typography>
              </CardContent>
            </div>
          </ProductWrapper>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Recipe;
