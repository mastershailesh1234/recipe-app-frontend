import React, { useState } from "react";
import nonveg from "../../images/veg.png";
import veg from "../../images/nonVeg.png";
import {
  ProductsContainer,
  ProductWrapper,
  ProductTitle,
  ProductCard,
  ProductInfo,
  ProductPrice,
} from "./ProductsElements";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
const Products = ({ heading, data }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  return (
    <ProductsContainer>
      <div style={{ textAlign: "center", margin: "20px" }}>
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Recipies"
          style={{ width: "60%", height: "50px", textAlign: "center" }}
        />
      </div>
      <ProductWrapper>
        {data
          .filter((food) =>
            food.name.toLowerCase().includes(query.toLowerCase())
          )
          .map((product, index) => {
            if (product.type == "true") {
              var Img = (
                <img src={nonveg} style={{ height: "15px", width: "15px" }} />
              );
            } else {
              var Img = (
                <img src={veg} style={{ height: "15px", width: "15px" }} />
              );
            }
            return (
              <ProductCard key={index}>
                <CardMedia
                  component="img"
                  alt={product.name}
                  height="140"
                  image={`${product.photo}`}
                />
                <ProductInfo>
                  <ProductTitle>
                    {Img} {product.name}
                  </ProductTitle>
                </ProductInfo>
                <CardContent className="cardContent">
                  <Typography variant="body2" color="text.secondary">
                    {product.desc}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => navigate(`/recipe/${product._id}`)}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </ProductCard>
            );
          })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
