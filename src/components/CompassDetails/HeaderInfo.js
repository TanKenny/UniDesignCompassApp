import React, { useState } from 'react';
import styled from "styled-components";
import { CircleQuestion } from 'grommet-icons';
import ReactJoyride from "react-joyride";

const HeaderInfo = () => {

  const [step, setStep] = useState({
    run: false,
    steps: [
      {
        target: ".project-detail-title-help",
        content: "Change your Project title and description here",
        disableBeacon: true
      },
      {
        target: ".project-detail-steps-help",
        content: "View all project steps here",
        disableBeacon: true
      },
      {
        target: ".all-users-help",
        content: "View all members in your project",
        disableBeacon: true
      },
      {
        target: ".all-permissions-help",
        content: "Add a new user here",
        disableBeacon: true
      },
      {
        target: ".navbar-help",
        content: "Navigate with this sidebar",
        disableBeacon: true
      }
    ]
  })

  const checkprops = (callback) => {
    if (callback.status === 'finished' || callback.status === 'skipped') {
      const updateState = { ...step, run: false }
      setStep(updateState)
    }
  }

  const handleClick = (e) => {
    e.preventDefault();

    const updateState = { ...step, run: true }
    setStep(updateState)
  }

  return (
    <HeaderInfoContainer >
      <Title>
        Project Details
      </Title>

      <ReactJoyride
        steps={step.steps}
        run={step.run}
        continuous={true}
        showProgress={true}
        showSkipButton={true}
        callback={checkprops}
        styles={{
          options: {
            // modal arrow and background color
            arrowColor: "#eee",
            backgroundColor: "#eee",
            // page overlay color
            overlayColor: "rgba(46, 49, 49, 1)",
            //button color
            primaryColor: "mediumaquamarine",
            //text color
            textColor: "#333",

            //width of modal
            width: 500,
            //zindex of modal
            zIndex: 1000
          }
        }}
      />

      <CircleQuestion onClick={handleClick} style={{ cursor: 'pointer' }} />
    </HeaderInfoContainer>
  )
}

export default HeaderInfo;

const Title = styled.p`
  color: black;
  font-weight: 500;
  font-size: 1.5rem;
  margin: 0;
`;

const HeaderInfoContainer = styled.div`
  min-height: 2.5rem;
  color: black;
  min-height: 2.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 0.1rem solid rgba(0,0,0,0.1);
  width: 100%;
  align-items: center;
  `;