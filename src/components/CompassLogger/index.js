import React, { useState } from "react";
import styled from "styled-components"
import SessionBar from "./SessionBar"
import CompassSection from "./CompassSection"
import InteractionFeed from "./Interactions"
import HeaderInfo from './HeaderInfo'

const CompassSelector = (props) => {
  const [loading, setLoading] = useState(false)
  return (
    <CSContainer>
      <HeaderInfo />
      <CSGrid>
        <CompassSection loading={loading} setLoading={setLoading} />
        <SessionBar />
      </CSGrid>
      <InteractionFeed setLoading={setLoading} />
    </CSContainer>
  )
};
export default CompassSelector;

export const CSGrid = styled.div`
  width: 100%;
  height: 75%;
  min-height: 41rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  @media (max-width: 767px){
    flex-direction: column;
    min-height: 81rem;
  }
  @media (max-width: 650px){ min-height: 80rem; }  
  @media (max-width: 550px){ min-height: 76rem; } 
  @media (max-width: 475px){ min-height: 72rem; }  
  @media (max-width: 413px){ min-height: 70rem; }   
  @media (max-width: 370px){ min-height: 68rem; }     
`;
export const CSContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow-y: auto; 
  display: flex;
  flex-direction: column;
`;