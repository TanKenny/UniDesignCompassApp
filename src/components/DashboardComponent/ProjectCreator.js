import React from 'react'
import styled from "styled-components"

import {DashboardSectionHeader} from "./style"
import ProjectTemplate from "./ProjectTemplate"
import CustomTemplate from "./CustomTemplate"

export const ProjectCreator = (props) => {
  return (
    <ProjectTypeFeedContainer>
      <DashboardSectionHeader>
        Create a Project
      </DashboardSectionHeader>
      <ProjectTypeFeed>
        <CustomTemplate/>
        <ProjectTemplate/>
      </ProjectTypeFeed>
    </ProjectTypeFeedContainer>
  )
}

export default ProjectCreator;

const ProjectTypeFeedContainer = styled.div`
  min-height: 15.6rem;
  color: black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 1rem 2rem; 
  @media (max-width: 767px){
    padding: 0;
  }
`;
const ProjectTypeFeed = styled.div`
  width: 100%;
  min-height: 12rem;
  color: black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;