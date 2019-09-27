import React from "react";
import { CSInteraction, CSInteractionContainer, CSInteractionButtonContainer } from "../../../styles/CompassPage"
import { LinkPrevious } from "grommet-icons"
const Interaction = ({interaction = {}, isLastStep, goToInteraction}) => {

  const { step, duration } = interaction; 

  const goToLog = (e) => {
    goToInteraction(interaction)
  }
  const translateTime = (secs) => {
    const sec_num = parseInt(secs, 10)
    const hours   = Math.floor(sec_num / 3600)
    const minutes = Math.floor(sec_num / 60) % 60
    const seconds = sec_num % 60

    return [hours,minutes,seconds]
      .map(v => v < 10 ? "0" + v : v)
      .filter((v,i) => v !== "00" || i > 0)
      .join(":") 
  }

  
  return (
    <CSInteractionContainer>
      <CSInteractionButtonContainer>
        <CSInteraction label={step.name_of_step} onClick={goToLog} color={step.color}/> 
        <span>{translateTime(duration)}</span>
      </CSInteractionButtonContainer>
      
      {!isLastStep && <LinkPrevious color="#5567FD" />}
    </CSInteractionContainer>

    
  )
};
export default Interaction;