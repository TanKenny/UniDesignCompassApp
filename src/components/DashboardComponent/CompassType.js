import React, {useContext} from 'react'

import { DashboardContext } from "../../context/DashboardPage/context"
import { FormCard, FormTitle } from "../../styles/Form"
import { 
  CompassCard, 
  CompassTypeFeed, 
  CompassCircle, 
  StepContainer, 
  CompassCardTitle, 
  CompassCardDetails ,
  CompassButtonContainer,
  CompassButtonLink
} from "../../styles/Dashboard"

const Type = (props) => {

  const { updateForm, switchTab } = useContext(DashboardContext);

  const defaultCompass = [
    {
      title:  "Grasp Challenge",
      description: "Understanding the challenge/ problem ",
      color: "#3498db"
    },
    {
      title:  "Research",
      description: "Investigating/ Researching ideas to incorporate into a solution",
      color: "#2ecc71"
    },
    {
      title:  "Generate Ideas",
      description: "Creating ideas/ rough drafts of solutions",
      color: "#9b59b6"
    },
    {
      title:  "Model/ Test Ideas",
      description: "Created and test new solutions",
      color: "#f1c40f"
    },
    {
      title:  "Choose/ Make Prototype",
      description: "Choosing the best solution and implementing it",
      color: "#e67e22"
    },
    {
      title:  "Troubleshoot/ Revise",
      description: "Edit/revise current implementation of solution",
      color: "#e74c3c"
    },
    {
      title:  "Communicate/ Reflect",
      description: "Discuss the overall reflection of the process",
      color: "#7f8c8d"
    }
  ]; 

  const goToCustom = event => {
    switchTab(3);
  };

  const goToReview = event => {
    updateForm({steps : defaultCompass })
    switchTab(3);
  };

  return (
    <FormCard >
      <FormTitle>Compass Type</FormTitle>
        <CompassTypeFeed>
          <section>
            <CompassCard>
              <CompassCardTitle>Default Compass</CompassCardTitle>
              <CompassCardDetails>
                <CompassCircle gridArea="content" circleLength={defaultCompass.length}>
                  {
                    defaultCompass.map((item,key) => (
                        <StepContainer 
                          key={key} 
                          circleLength={defaultCompass.length}
                          rotateAngle={key*(360/(defaultCompass.length))}
                          color={item.color}
                        />
                      )
                    )
                  }
                </CompassCircle>
                <CompassButtonContainer>
                  <CompassButtonLink label="More Details"/>
                  <CompassButtonLink onClick={goToReview} label="Select Type"/>
                </CompassButtonContainer>
              </CompassCardDetails>
            </CompassCard>
            {/* <CompassCard>
              Default Compass
            </CompassCard>
            <CompassCard>
              Default Compass
            </CompassCard>
            <CompassCard>
              Default Compass
            </CompassCard>
            <CompassCard>
              Default Compass
            </CompassCard> */}
          </section>
        </CompassTypeFeed>
        {/* <Button label="Custom Steps" onClick={goToCustom} primary />
        <Button label="Default Steps" onClick={goToReview} primary /> */}
    </FormCard>
  )
}

export default Type; 