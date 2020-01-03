import React, {useContext} from "react";
import styled from "styled-components"
import { LinkNext } from "grommet-icons"
import { Button } from "grommet"
import { navigate } from "gatsby"

import translateTime from "../../../utils/translateTime"
import {CompassContext} from "../../../context/CompassPage/context"

const Interaction = ({interaction = {}, isLastStep = false}) => {
  const { compass, session } = useContext(CompassContext);
  const { step = {name_of_step: "", color: ""}, duration = 0 } = interaction;  

  const openReviewLog = (evt) => {    
    evt.preventDefault()
    navigate(`/Logger/?c=${compass.id}&s=${session.id}&i=${interaction.id}`)
  }
  
  return (
    <InteractionContainer>
      <InteractionButtonContainer>
        <InteractionButton 
          label={step.name_of_step} 
          color={step.color}
          onClick={openReviewLog}
        /> 
        <span>{translateTime(duration)}</span>
      </InteractionButtonContainer>
      
      {!isLastStep && <LinkNext color="#5567FD" />}
    </InteractionContainer>

    
  )
};
export default Interaction;

const InteractionContainer = styled.div`
  margin: 0 0.5rem;
  min-width: 7.6rem;
  min-height: 7rem;
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: space-between;
  svg {
    margin-bottom: 1rem;
  }
`;
const InteractionButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  span {
    font-size: 0.8rem;
  }
`;
const InteractionButton = styled(Button)`
  border: 0.15rem solid ${props => props.color ? props.color : '#5567FD'};
  :hover {
    transition: all 0.2s;
    background-color: transparent;
    border: 0.15rem solid transparent;
  }
  border-radius: 50%;
  transition: all 0.3s;
  padding: 0.5rem;
  color: black; 
  font-weight: 600;
  font-size: 0.7rem;
  line-height: 0.8rem;
  height: 5rem;
  width: 5rem;
  background-color: ${props => props.color ? props.color : '#5567FD'};

`;