import styled from "styled-components";
import ImgBg from "../../images/img1.jpg";
import { Link } from "react-router-dom";

export const EntryContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)),
    url(${ImgBg});
  height: 95vh;
  background-position: center;
  background-size: cover;
`;

export const EntryContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const EntryItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 700px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
  width: 100vw;
`;

export const EntryH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 4rem);
  margin-top: 7rem;
  margin-bottom: 2rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
`;

export const EntryP = styled.p`
  font-size: clamp(1rem, 2.25vw, 2.5rem);
  margin-bottom: 2rem;
  font-weight: normal;
`;

export const EntryBtn = styled.button`
  margin: 10px;
  width: 250px;
  font-size: 1.4rem;
  padding: 0.8rem 2.5rem;
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
export const EntryLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
