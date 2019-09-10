import React, { useReducer, createContext, useContext} from "react";
import GlobalReducer, { SIGN_IN, SIGN_OUT, SELECT_COMPASS} from "./reducers"

// CONTEXT
export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
  const [globalState,dispatch] = useReducer(GlobalReducer, {
    user: {
      compasses: [],
    },
    compass: {},
    session: {}
  })
  return (
    <GlobalContext.Provider 
      value={{
        loginUser: (user) => dispatch({type: SIGN_IN, payload: user}),
        selectCompass: (compass) => dispatch({type: SELECT_COMPASS, payload: compass}),
        logoutUser: () => dispatch({type: SIGN_OUT, payload: {}}),
        ...globalState
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const globalStore = () => (useContext(GlobalContext));
