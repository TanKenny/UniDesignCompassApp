import Amplify, {API,graphqlOperation} from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import aws_config from '../aws-exports';

Amplify.configure(aws_config);

export async function getUser(id){
    const user=  await API.graphql(graphqlOperation(queries.getUser,{id}));
    return user;
}

export async function getUserbyUsername(username){
    const filter = { username : { eq : username } }
    const user = await API.graphql(graphqlOperation(queries.listUsers,{filter}));
    return user;
}

export async function getLogs(log_id){
    const Log= await API.graphql(graphqlOperation(queries.getLog,{id:log_id}));
    return Log;
}

export async function getProcess(process_id){
    const Process = await API.graphql(graphqlOperation(queries.getProcess,{id:process_id}));
    return Process;
}
export async function getPhase(phase_id){
    const Phase = await API.graphql(graphqlOperation(queries.getPhase,{id:phase_id}));
    return Phase;
}
export async function createUser(username,first_name,last_name,email,phone,password_hash){
    const userinfo ={
        username:username,
        first_name:first_name,
        last_name:last_name,
        email:email,
        password_hash:password_hash,
        phone_number:phone,
        processes:[]
    }
    const newUser = await API.graphql(graphqlOperation(mutations.createUser,{input:userinfo}));
    return newUser;
}
export async function createLogs(timestamp,text){
    const loginfo={
        timestamp,
        text
    }
    const newLog = await API.graphql(graphqlOperation(mutations.createLog,{input:loginfo}));
    return newLog;
}
async function createProcess(id,name,date_start,date_end,phases){
    const processInfo={
        user_id:id,
        phase_ids:phases,
        name:name,
        date_start,
        date_end
    }
    const newProcess = await API.graphql(graphqlOperation(mutations.createProcess,{input:processInfo}));
    return newProcess;
}
async function createPhase(title,description){
    const phaseInfo={
        title:title,
        description:description,
        duration:"0000000",
        logs:[]

    }
    const newPhase = await API.graphql(graphqlOperation(mutations.createPhase,{input:phaseInfo}));
    return newPhase;
}
export async function updateUser(id,first_name,last_name,email,password_hash,processes){
    const userinfo ={
        id:id,
        first_name:first_name,
        last_name:last_name,
        email:email,
        password_hash:password_hash,
        processes:processes
    }
    const updatedUser= await API.graphql(graphqlOperation(mutations.updateUser,{input:userinfo}));
    return updatedUser;
}
export async function updateLogs(id,timestamp,phase_log_json){
    const loginfo={
        id:id,
        timestamp:timestamp,
        phase_log_json:phase_log_json
    }
    const updatedLog = await API.graphql(graphqlOperation(mutations.updateLog,{input:loginfo}));
    return updatedLog;
}
export async function updateProcess(id,name,timestamp){
    const processInfo={
        id:id,
        name:name,
        timestamp:timestamp
    }
    const updatedProcess = await API.graphql(graphqlOperation(mutations.updateProcess,{input:processInfo}));
    return updatedProcess;
}
export async function updatePhase(id,logs,duration,title,description){
    const phaseInfo={
        id:id,
        logs,
        duration,
        title,
        description
    }  
    const updatedPhase = await API.graphql(graphqlOperation(mutations.updatePhase,{input:phaseInfo}));
    return updatedPhase;
}
export async function deleteUser(id){
    const userinfo ={
        id:id
    }
    const deletedUser= await API.graphql(graphqlOperation(mutations.deleteUser,{input:userinfo}));
    return deletedUser;
}
export async function deleteProcess(id){
    const processInfo={
        id:id
    }
    const deletedProcess = await API.graphql(graphqlOperation(mutations.deleteProcess,{input:processInfo}));
    return deletedProcess;
}

export async function deleteLogs(id){
    const loginfo={
        id:id
    }
    const deletedLog = await API.graphql(graphqlOperation(mutations.deleteLog,{input:loginfo}));
    return deletedLog;
}
export async function deletePhase(id){
    const phaseInfo ={
        id:id
    }
    const deletedPhase = await API.graphql(graphqlOperation(mutations.deletePhase,{input:phaseInfo}));
    return deletedPhase;
}
export async function createNewCompass(user,phases){
    let newPhase=[];
    for(let i= 0; i<phases.length;i++){
        await createPhase(phases[i].title,phases[i].Description).then(
            (res)=>{
                newPhase.push(res.data.createPhase.id);
            }
        );
    }
    let process_info;
    await createProcess(user.id,"Blank Project","0000000","00000000",newPhase).then(
        (res)=>{
            process_info=res.data.createProcess;
        }
    )
    
    user.processes.push(process_info.id);
    await updateUser(user.id,user.first_name,user.last_name,user.email,user.password_hash,user.processes)
    
}
export async function appendNewLog(phaseId,log){
    createLogs(log.timestamp,log.text).then(
        (logres)=>{
            getPhase(phaseId).then(
                (res)=>{
                    let phase_info= res.data.getPhase;
                    console.log(res);
                    console.log(logres);
                    //updatePhase(phase_info.id,phase_info.logs.push(logres.data.createLog),phase_info.duration,phase_info.title,phase_info.description);
                }
            )
        }
    )
}