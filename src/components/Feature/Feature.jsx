import React from 'react';
import { FeatureContainer} from './FeatureElements';

const Feature = (props) => {
  return (
    <FeatureContainer>
      <h1>{props.name}</h1>
    </FeatureContainer>
  );
};

export default Feature;
