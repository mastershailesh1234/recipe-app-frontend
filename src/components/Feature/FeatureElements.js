import styled from 'styled-components';
import FeaturePic from '../../images/featured3.jpg';

export const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${FeaturePic});
  height: 30vh;
  max-height: 150px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;
  margin-top:3vh;

  h1 {
    font-size: clamp(1rem, 2rem, 5rem);
    font-weight: normal;
  }
  
`;

