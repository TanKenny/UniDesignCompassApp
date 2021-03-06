import { API, graphqlOperation, Storage } from "aws-amplify";
import * as queries from '../graphql/queries';
import config from '../aws-exports';

API.configure(config);

export async function getCompasses() {
  const compasses = await API.graphql(graphqlOperation(queries.listCompasss, { limit: 100 }));

  return compasses.data.listCompasss.items

}

export async function getAttachment(attachment){
  return Storage.get(attachment.key)
}
  

export async function getUser(id) {
  return API.graphql(graphqlOperation(queries.getUser, { id }));
  // if(user.data && user.data.listUsers.items.length > 0){
  //   return user.data.listUsers.items[0]
  // } else {
  //   return {}
  // }

  // return new Promise(function (resolve, reject) {
  //   if (compass.data.listUsers === null) {
  //     reject("No User Found");
  //   } else {
  //     resolve(compass);
  //   }
  // })
}

export async function getUsers(email) {
  return API.graphql(graphqlOperation(queries.listUsers, { filter: { email: { contains: email } } }))
}


export async function getCompass(compass_id) {
  const compass = await API.graphql(graphqlOperation(queries.getCompass, { id: compass_id }));

  return new Promise(function (resolve, reject) {
    if (compass.data.getCompass === null) {
      reject("No Compass Found");
    } else {
      resolve(compass);
    }
  })
}

export async function getSession(session_id) {
  const session = await API.graphql(graphqlOperation(queries.getSession, { id: session_id }));

  return new Promise(function (resolve, reject) {
    if (session.data.getSession === null) {
      reject("No User Found");
    } else {
      resolve(session);
    }
  })
}

export async function getStep(step_id) {
  const step = await API.graphql(graphqlOperation(queries.getStep, { id: step_id }));

  return new Promise(function (resolve, reject) {
    if (step.data.getStep === null) {
      reject("No User Found");
    } else {
      resolve(step);
    }
  })
}

export async function getInteraction(interaction_id) {
  const interaction = await API.graphql(graphqlOperation(queries.getInteraction, { id: interaction_id }));

  return new Promise(function (resolve, reject) {
    if (interaction.data.getInteraction === null) {
      reject("No User Found");
    } else {
      resolve(interaction);
    }
  })
}

