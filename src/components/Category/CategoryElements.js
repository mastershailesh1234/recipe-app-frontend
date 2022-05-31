import styled from 'styled-components';
import CategoryPic from '../../images/img2.jpg';
import { Link } from "react-router-dom";

export const CategoryContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${CategoryPic});
  height: 40vh;
  width:35vw;
  display: flex;
  background-position: center;
  background-size: cover;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;
  margin:3vh;

  h1 {
    font-size: clamp(2rem, 3vw, 4rem);
    font-weight:normal;
  }
  @media screen and (max-width: 600px) {
    width: 300px;
  }
`;

export const CategoryBtn = styled.button`
  font-size: 1rem;
  padding: .8rem .5rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
export const CategoryBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  align-items: flex-start;
  
`;
export const CatLink = styled(Link)`
 text-decoration:none;
 color:white;
`;

