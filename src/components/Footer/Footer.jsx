import React from "react";
import { FooterContainer, FooterWrap, SocialLogo } from "./FooterElements";

import FavoriteIcon from "@mui/icons-material/Favorite";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialLogo to="/">
          <FavoriteIcon />
          FOOD
          <FavoriteIcon />
        </SocialLogo>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
