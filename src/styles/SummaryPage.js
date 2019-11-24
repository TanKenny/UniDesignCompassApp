// import React from 'react';
import styled from 'styled-components';
import {
  Button,
  Table,
  TableCell,
  TableHeader,
  TableRow,
  TableBody
} from 'grommet';

//Summary Log
export const SummaryTitle = styled.h4`
  padding: 0;
  margin: 0; 
  display: inline-block;
  margin: auto;
  font-size:xx-large;
`;

export const SummaryListButton = styled(Button)`
  float: right;
  color: black;
  padding: initial;
  width: 16%;
  transition: all 0.3s;
  border: 0.15rem solid #5567FD;
  background-color:#5567FD;
  color: white; 
  svg {
    transition: all 0.3s;
    fill: white; 
    stroke: white; 
  }
  margin: 0 auto;

  @media (max-width: 376px){
    width: 45%;
    margin: 0.45em;
  }
`;

export const SummaryLogBox = styled.div`
  width: 70%; 
  height: 85%;
  border-radius: 10px; 
  border-color: black; 
  border-style: solid; 
  margin-top: 0.5em;
  padding: 0.5em;
  overflow: auto;
  
  @media (max-width: 376px){
    width: auto;
  }
`;

export const SingleSummaryLog = styled.h4`
  margin: 0;
  padding; 0.5em;
  font-weight: 400;
`;

export const LogAttachments = styled.h6`
  margin: 0;
  padding: 0;
  margin-left: 0.5em;
  float: left;
  margin-right: 0.5em;
`;


export const SummaryContainer = styled.div`
  padding: 2em;
  width: 100%;

  @media (max-width: 376px){
    width: auto;
    padding: 1em;
  }
`;

export const TextAreaContainer = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: row;

  @media (max-width: 376px){
    flex-direction: column;
  }
`;

export const TextArea = styled.textarea`
  height: 90%;
  width: 85%;
  float: right; 
  //margin-top: 1em; 
  padding-left: 0.5em;
  border-radius: 10px; 
  margin-left: 1em;
  font-size: 20px;

  @media (max-width: 376px){
    width: -webkit-fill-available;
    margin-left: 0;
  }
  
`;

export const CommentButton = styled(Button)`
  width: 89%;
  float: right;
  transition: all 0.3s;
  border: 0.15rem solid #5567FD;
  background-color:#5567FD;
  color: white; 
  svg {
    transition: all 0.3s;
    fill: white; 
    stroke: white; 
  }
  border-radius: 1em;
  margin-top: 0.5em;

  @media (max-width: 376px){
    width: 45%;
    float: left;
    margin-top: 0.5em;
  }
`;

//SummarySession
export const SummaryTable = styled(Table)`
  //display: block;
  overflow: auto;
  width:100%;
  //table-layout: fixed;

  @media (max-width: 376px){
    
  }
`;

export const SummaryTableHeader = styled(TableHeader)`
  font-weight: 350;
  border-bottom: solid 1.5px;
  width: 20%;
  border-bottom: solid;
`;

export const SummaryTableBody = styled(TableBody)`
  overflow: auto;
  border-bottom: solid;
  border-width: 1px;
`;

export const SummaryTableRow = styled(TableRow)`
  font-size: initial;
`;

export const SummaryTableCell = styled(TableCell)`
`;

export const SummaryTableCellHeader = styled(TableCell)`
  scope: col; 
  border: bottom;
  size: large;
`;

export const SummaryTableCellBody = styled(TableCell)`
  scope: "row"; 
  border: "bottom";
  border-bottom: solid 1px;
  background-color: ${props => props.color ? props.color : "transparent"};
`;

export const SummaryTdBody = styled.td`
  //border-bottom: solid 1px;
  //border: hidden;
  background-color: ${props => props.color ? props.color : "transparent"};
  
`;

export const SummaryLogHeader = styled.div`
  @media (max-width: 376px){
    text-align-last: center;  
  }
`;

export const SummaryTableConatiner = styled.div`
  width: auto;
  padding: 1rem;
  display: block;
  overflow: auto;
  margin: 1em;
  width: 96%;
  box-shadow: 0 1px 3px 0 #d2d4d6;
  background: white;
`;

export const SummarySessionName = styled.div`
  font-size: x-large;
  font-weight: 500;
  margin-bottom: 0.5em;
`;

export const SummaryMainView = styled.div`
  overflow: auto;
  width: 90%; 
  margin-top: 1em;
  margin-Left: 1em; 
  margin-bottom: 1em;
  margin-right: 1em;
  //border: groove;
`;

export const SummaryTdHeader = styled.td`
  text-align: left;
  font-size: 1.4em;
`;

export const SummaryTdHeader1 = styled.td`
  text-align: left;
  font-size: 1.4em;

  @media (max-width: 376px){
    background: blue;
    position: fixed;
  }  
`;
