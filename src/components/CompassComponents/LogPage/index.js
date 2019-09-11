import React,{ useState, useEffect} from "react";
import { 
  LoggerGrid,
  LoggerInput, 
  LoggerTA, 
  StepName,
  LoggerInnerNav,
  CompassButton,
  SessionView,
  SessionHeader,
  SessionTitle,
  SessionDescription,
  StepClock,
  TimerButton,
  AttachmentButton,
  SessionAttachments
} from "../../../styles/CompassPage"
import { Storage, API, graphqlOperation } from 'aws-amplify'
import uuid from 'uuid/v4'
import { getInteraction } from '../../../utils/queries'
import { updateInteraction } from '../../../utils/mutations'
import config from '../../../aws-exports'
import {globalStore} from "../../../context/context"

const Logger = () => {
  const {interaction, removeInteraction} = globalStore()

  const [step, setStep] = useState('');
  const [log, setLog] = useState('');
  const [upload,setUpload] = useState({})
  const [attachments,setAttachments] = useState([])
  const [time,setTime] = useState(0)
  const [start,setStart] = useState(true)

  const id = interaction
  
  useEffect(() => {
    getInteraction(id).then((res) => {
      const {log_content, attachments, interaction_start_end, step} = res.data.getInteraction
      setStep(step)
      setLog(log_content)
      setAttachments(attachments)
    })

  }, [])

  useEffect(() => {
    let interval = null;

    if (start) {
      interval = setInterval(() => setTime(time+1), 1000)

    } else if (!start && time !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval);
  }, [start,time])
  
  const changeToCompass = (e) => {
    const newInteraction = {
      id ,
      log_content: log,
      interaction_start_time: time
    } 
    updateInteraction(newInteraction).then(() => {
      removeInteraction()
    })
  }

  const translateTime = (secs) => {
    const sec_num = parseInt(secs, 10)
    const hours   = Math.floor(sec_num / 3600)
    const minutes = Math.floor(sec_num / 60) % 60
    const seconds = sec_num % 60

    return [hours,minutes,seconds]
      .map(v => v < 10 ? "0" + v : v)
      .filter((v,i) => v !== "00" || i > 0)
      .join(":") 
  }

  const pause = (e) => {
    const newInteraction = {
      id,
      log_content: log,
      interaction_start_time: time
    }
    if (start) {
      updateInteraction(newInteraction)
    } 
    
    return setStart(!start)
  }

  const handleUpload = (event) => { 
    const { target: { value, files } } = event
    const [image] = files || []
    setUpload(image)
  }

  const uploadToS3 = async (e) => {
    if (upload) {
      const { name: fileName, type: mimeType } = upload
      const fileForUpload = {
        bucket: config.aws_user_files_s3_bucket,
        key:  `${uuid()}${fileName}`,
        region: config.aws_user_files_s3_bucket_region,
      }
      const newInteraction = {
        id,
        log_content: log,
        interaction_start_time: time,
        attachments: fileForUpload
      }

      try {
        await Storage.put(fileForUpload.key, upload, { contentType: mimeType })
        updateInteraction(newInteraction)
          .then((res) => {
            setAttachments(res.data.updateInteraction.attachments)
          })
      } catch (err) {
        console.log('error cannot store file: ', err)
      }
    }
  }

  return (
    <LoggerGrid
      rows={['15%', '85%']}
      columns={['80%', '20%']}
      fill
      areas={[
        { name: 'header', start: [0, 0], end: [0, 0] },
        { name: 'main', start: [0, 1], end: [0, 1] },
        { name: 'session', start: [1, 0], end: [1, 1] },
      ]}
    >
      <LoggerInnerNav gridArea="header" >
        <CompassButton onClick={changeToCompass}/>
        <StepName> {step.name_of_step} </StepName>
        <input
          label="File to upload"
          type="file"
          onChange={handleUpload}
          style={{ margin: '10px 0px' }}
        />
        <AttachmentButton onClick={uploadToS3}/>
      </LoggerInnerNav>
      <LoggerTA gridArea="main" >
        <LoggerInput
          placeholder="Enter Log"
          value={log}
          onChange={event => setLog(event.target.value)}
        />
      </LoggerTA>
      <SessionView 
        rows={['25%', '15%', '60%']}
        columns={['fill']}
        fill
        areas={[
          { name: 'header', start: [0, 0], end: [0, 0] },
          { name: 'description', start: [0, 1], end: [0, 1] },
          { name: 'attachments', start: [0, 2], end: [0, 2] },
        ]}
        gridArea="session"
      >
        {
          step.name_of_step ? (
            <>
            <SessionHeader gridArea="header">
              <SessionTitle>
                {step.name_of_step}
              </SessionTitle>
              <StepClock>
                {translateTime(time)}
                <TimerButton onClick={pause} start={start}/>
                {/* <TimerButton onClick={pause} start={start}/> */}
              </StepClock>
            </SessionHeader>
              <SessionDescription gridArea="description">
                {step.description_of_step}
              </SessionDescription>
              <SessionAttachments gridArea="attachments">
                <h1>Attachments</h1>
                { attachments && attachments.key && <p>{attachments.key.slice(36)}</p>}
              </SessionAttachments>
            </>
          ) : ''
        }
      </SessionView>
    </LoggerGrid>
  );
}
export default Logger;
