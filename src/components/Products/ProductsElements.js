import styled from "styled-components";

export const ProductsContainer = styled.div`
  min-height: 60vh;
  padding: 3rem calc((100vw - 1300px) / 2);
  background: white;
  color: #150f0f;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  align-items: flex-start;
`;

export const ProductCard = styled.div`
  margin: 0.5rem 2rem;
  width: 40%;
  border: none;
  box-shadow: 0 5px 10px grey;
  @media screen and (max-width: 600px) {
    width: 600px;
  }
`;

export const ProductTitle = styled.h2`
  font-weight: 100;
  font-size: 1rem;
  padding: 0 1rem 0 0;
  width: 70%;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  text-align: center;
`;

export const ProductPrice = styled.p`
  font-size: 1.25rem;
  padding: 0 0 0 1rem;
`;

export const ProductImg = styled.div`
 width=10px;
 height=10px;
`;
