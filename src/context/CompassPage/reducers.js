import {initialState} from "./context"

export const PAUSE_TIMER = "PAUSE_TIMER";
export const START_TIMER = "START_TIMER";
export const INCREASE_TIMER = "INCREASE_TIMER";
export const UPDATE_NEWEST_LOG = "UPDATE_NEWEST_LOG";
export const UPDATE_NEWEST_DURATION = "UPDATE_NEWEST_DURATION";
export const UPDATE_COMPASS = "UPDATE_COMPASS";
export const UPDATE_SESSION = "UPDATE_SESSION";
export const UPDATE_INTERACTION = "UPDATE_INTERACTION";
export const ADD_INTERACTION = "ADD_INTERACTION";
export const UPDATE_INTERACTIONS = "UPDATE_INTERACTIONS";
export const UPDATE_TIME = "UPDATE_TIME";
export const CLEAR_COMPASS = "CLEAR_COMPASS";
export const CLEAR_SESSION = "CLEAR_SESSION";
export const CLEAR_INTERACTION = "CLEAR_INTERACTION";
export const CLEAR_INTERACTIONS = "CLEAR_INTERACTION";
export const CLEAR_TIME = "CLEAR_TIME";

const updateCompass = (newCompass, state) => ({ ...state, compass: newCompass})
const updateSession = (newSession, state) => ({ ...state, session: newSession})
const addInteraction = (newInteraction, state) => {
  const interaction = {...state.newestInteraction, ...newInteraction}
  let newInteractions = state.interactions;
  newInteractions = newInteractions.filter((item) => { return interaction.id !== item.id })
  newInteractions = [interaction, ...newInteractions]
  
  return { 
    ...state, 
    interaction, 
    interactions: newInteractions,
    newestDuration: newInteraction.duration,
    newestLog: newInteraction.log_content,
    newestInteraction: interaction,
    interactionAdded: true,
    interactionUpdated: false
  }
}
const increaseDuration = (state) => {
  const interaction = {...state.newestInteraction, duration: state.newestDuration + 1}
  let newInteractions = state.interactions;
  newInteractions = [interaction , ...newInteractions.filter((item) => { return interaction.id !== item.id })]
  
  return { 
    ...state, 
    interactions: newInteractions,
    newestDuration: state.newestDuration + 1,
    newestInteraction: interaction
  }
}
const updateNewestDuration = (newDuration, state) => {
  const interaction = {...state.newestInteraction, duration: newDuration}
  let newInteractions = state.interactions;
  newInteractions = newInteractions.filter((item) => { return interaction.id !== item.id })
  newInteractions = [interaction, ...newInteractions]
  
  return { 
    ...state, 
    interaction, 
    interactions: newInteractions,
    newestDuration: newDuration,
    newestInteraction: interaction,
    interactionAdded: true,
    interactionUpdated: false
  }
}
const updateInteraction = (newInteraction, state) => ({
  ...state, 
  interaction: newInteraction, 
  interactionAdded: false, 
  interactionUpdated: true 
}) 
const updateInteractions = (newInteractions, state) => ({ 
  ...state, 
  interactions: newInteractions
})
const updateTime = (newTime, state) => ({ ...state, time: newTime})
const clearCompass = () => (initialState)
const clearSession = (state) => ({ 
  ...state, 
  session: {}, 
  newestInteraction: {},
  newestLog: "",
  newestDuration: 0,
  interaction: {}, 
  interactions: [], 
  interactionAdded: false,
  interactionUpdated: false,
  pause: true
  })
const clearInteraction = (state) => ({ 
  ...state, 
  interaction: {}, 
  newestInteraction: {},
  newestLog: "",
  newestDuration: 0,
  interactionAdded: false,
  interactionUpdated: false,
  pause: true
})
const clearInteractions = (state) => ({ ...state, interactions: []})
const clearTime = (state) => ({ ...state, time: 0})

export default (state,{type,payload}) => {
  switch(type){
    case PAUSE_TIMER:
      return {
        ...state, 
        pause: true
      }  
    case START_TIMER:
      return {
        ...state, 
        pause: false
      }  
    case INCREASE_TIMER:
      return increaseDuration(state);
    case UPDATE_NEWEST_LOG:
      return {
        ...state, 
        newestLog: payload
      }  
    case UPDATE_NEWEST_DURATION:
      return updateNewestDuration(payload, state);
    case UPDATE_COMPASS:
      return updateCompass(payload, state);
    case UPDATE_SESSION:
      return updateSession(payload, state);
    case UPDATE_INTERACTION:
      return updateInteraction(payload, state);
    case ADD_INTERACTION:
      return addInteraction(payload, state);
    case UPDATE_INTERACTIONS:
      return updateInteractions(payload, state);
    case UPDATE_TIME:
      return updateTime(payload, state);
    case CLEAR_COMPASS:
      return clearCompass(state);
    case CLEAR_SESSION:
      return clearSession(state);
    case CLEAR_INTERACTION:
      return clearInteraction(state);
    case CLEAR_INTERACTIONS:
      return clearInteractions(state);
    case CLEAR_TIME:
      return clearTime(state);
    default: 
      return state;
  }
};