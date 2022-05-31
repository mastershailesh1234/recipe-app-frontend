import React from "react";
import {
  CategoryContainer,
  CategoryBtn,
  CategoryBox,
  CatLink,
} from "./CategoryElements";

const Category = () => {
  return (
    <CategoryBox>
      <CategoryContainer>
        <h1>ALL RECIPES</h1>
        <CategoryBtn>
          <CatLink to="/FullMenu">Show More...</CatLink>
        </CategoryBtn>
      </CategoryContainer>
      <CategoryContainer>
        <h1>Stater And Soups Recipes</h1>
        <CategoryBtn>
          <CatLink to="/SoupStarter">Show More...</CatLink>
        </CategoryBtn>
      </CategoryContainer>
      <CategoryContainer>
        <h1>Main Course Recipes</h1>
        <CategoryBtn>
          <CatLink to="/MainCourse">Show More...</CatLink>
        </CategoryBtn>
      </CategoryContainer>
      <CategoryContainer>
        <h1>Dessert Recipes</h1>
        <CategoryBtn>
          <CatLink to="/EndingFood">Show More...</CatLink>
        </CategoryBtn>
      </CategoryContainer>
    </CategoryBox>
  );
};

export default Category;
