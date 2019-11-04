import React, { useState, useContext, useEffect } from 'react'
import { CompassContext } from "../../../context/CompassPage/context"
import { createSession } from "../../../utils/mutations"
import { createSessionSub } from "../../../utils/subscriptions"
import { dateFormatter, timeSorter } from "../../../utils/translateTime"
import {navigate} from "gatsby"
import { AddCircle} from 'grommet-icons';

import {
  SCHeader,
  SCBody,
  SCContainer,
  SessionRow,
  SessionRowTitle,
  SessionRowDate,
  SCAddSession,
  SessionRowMore,
  SessionRowMoreButton,
  SessionRowHeader
} from "../../../styles/CompassPage"

const SessionCreator = (props) => {
  const {compass} = useContext(CompassContext)
  const [pastSessions, setPastSessions] = useState([])

  // // subscription for any new project being created
  // useEffect(() => {
  //   const subscriber = updateProjectsSub().subscribe({
  //     next: res => {
  //       const newProject = res.value.data.onCreateCompass
  //       if(newProject.admins.includes(user.email)){
  //         setNewestProject(newProject)
  //       }
  //     }
  //   });

  //   return () => subscriber.unsubscribe()
  // }, [])

  // // if a new project is created, add it to existing projects
  // useEffect(() => {
  //   if(newestProject !== {}) {
  //     if (compasses.length) setCompasses([newestProject, ...compasses]) 
  //     else setCompasses([newestProject]) 
  //   }
  // }, [newestProject])

  useEffect(() => {
    if(compass.hasOwnProperty("id")){
      setPastSessions(compass.sessions.items.sort(timeSorter))
    }  
  }, [compass])

  const currentCompassId = compass.id

  const goToSession = (session) => {
    navigate(`/Compass/?c=${currentCompassId}&s=${session}`)
  }

  const sendForm = (e) => {
    createSession("untitled", " ", currentCompassId)
      .then((result) => {
        navigate(`/Compass/?c=${currentCompassId}&s=${result.data.createSession.id}`)
      })
      .catch(err => console.log(err))
  }

  return (
    <SCContainer>
      <SCHeader> 
        <p>Sessions </p>
        <SCAddSession 
          onClick={sendForm} 
          label="New Session" 
          icon={<AddCircle/>}
        />
      </SCHeader>
      
      <SCBody>
        <SessionRowHeader>
          <SessionRowTitle>Title</SessionRowTitle>
          <SessionRowDate>Created on</SessionRowDate>
          <SessionRowMore></SessionRowMore>
        </SessionRowHeader>
        {
          pastSessions !== [] ? pastSessions.map((session, key) => (
              <SessionRow key={key} onClick={(e) => goToSession(session.id)}>
                <SessionRowTitle >{session.name_of_session}</SessionRowTitle>
                <SessionRowDate>{dateFormatter(session.createdAt)}</SessionRowDate>
                <SessionRowMore><SessionRowMoreButton onClick={e => console.log("more")} /></SessionRowMore>
              </SessionRow>
            )
          ) : <p>You have no Sessions!</p>
        }
      </SCBody>
    </SCContainer>
  )
}

export default SessionCreator; 