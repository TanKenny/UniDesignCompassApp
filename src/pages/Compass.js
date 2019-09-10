import React, { useState, useEffect } from "react";
import Layout from '../components/Layout';
import LogPage from "../components/CompassComponents/LogPage"

import SessionCreator from "../components/CompassComponents/SessionCreator"
import CompassSelector from "../components/CompassComponents/CompassSelector"
import { CompassPageProvider, CompassPageContext } from "../context/CompassPage/context"
import { MainView } from "../styles/CompassPage"
// import { getCompass } from "../utils/queries"
import {globalStore} from "../context/context"

const CompassPage = (props) => {
  const {compass, selectCompass} = globalStore()
  useEffect(() => {
    
    return () => {
      selectCompass({})
      localStorage.removeItem('compass')
    }
  }, [])

  return (
    <Layout>
      <CompassPageProvider>
        <CompassPageContext.Consumer>
          {
            ({ currentSession, currentInteraction }) => (
              <MainView>
                {
                  currentInteraction.step.name_of_step ? <LogPage /> :
                    localStorage.getItem('session') ? <CompassSelector /> :
                      <SessionCreator />
                }
              </MainView>
            )
          }
        </CompassPageContext.Consumer>
      </CompassPageProvider>
    </Layout>
  )
}
export default CompassPage;
