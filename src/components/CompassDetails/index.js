import React from "react";
import { CompassViewerContainer, CompassNavigationBar } from "../../styles/CompassPage"
import ProjectDetails from "./ProjectDetails";
import ScribePermission from "./Permissions/ScribePermission";
import TeachersPermission from "./Permissions/TeachersPermission";
import MembersPermission from "./Permissions/MembersPermission";
import ReadersPermission from "./Permissions/ReadersPermission";
import DisplayPermission from "./Permissions/DisplayPermission";
import { Box } from "grommet";
import styled from "styled-components";


export default (props) => {

  return (
    <CompassViewerContainer>
      <CompassNavigationBar>
        <ProjectDetails />
        <DisplayPermission />
      </CompassNavigationBar>
      <CompassNavigationBar2>
        <ScribePermission />
        <TeachersPermission />
        <MembersPermission />
        <ReadersPermission />
      </CompassNavigationBar2>
    </CompassViewerContainer>
  )
};

export const CompassNavigationBar2 = styled(Box)`
  width: 100%;
  height: 100%
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  // background: white;

  @media (max-width: 767px){
    width: 100%
  } 
`;