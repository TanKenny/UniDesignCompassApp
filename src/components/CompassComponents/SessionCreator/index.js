import React, { useState } from 'react'
//import { userCompassPage } from "../../../context/CompassPage/context"
import { createSession } from "../../../utils/mutations"

import {
  SCButtonContainer,
  SCButton,
  SCFormContainer,
} from "../../../styles/CompassPage"
import {
  FormCard,
  FormTitle,
  InputContainer,
  InputField,
  InputTextArea
} from "../../../styles/Form"

const SessionCreator = (props) => {
  const [form, setForm] = useState({ title: '', description: '' });
  const [error] = useState({ title: '', description: '' })
  // const { createSession } = userCompassPage();

  const onChange = ({ target: { value, name } }) => { setForm({ ...form, [name]: value }) };

  const currentCompassId = localStorage.getItem("compass")

  const sendForm = (e) => {
    createSession(form.title, form.description, currentCompassId)
      .then((result) => {
        localStorage.setItem('session', result.data.createSession.id)
      })
      .catch(err => console.log(err))
  }

  return (
    <FormCard alignSelf="center" elevation="medium">
      <FormTitle> Create a Session </FormTitle>
      <SCFormContainer
        onSubmit={sendForm}
        onChange={onChange}
        errors={{ ...error }}
        value={form}
      >
        <InputContainer name="title" required>
          <InputField name="title" type="text" placeholder="Session Title" />
        </InputContainer>
        <InputContainer name="description" >
          <InputTextArea name="description" placeholder="Session Description" />
        </InputContainer>
        <SCButtonContainer>
          <SCButton type="submit" label="Create Session" />
        </SCButtonContainer>
      </SCFormContainer>
    </FormCard>
  )
}

export default SessionCreator; 