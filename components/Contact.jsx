import React, { useState, useRef } from 'react';
import { RiSendPlaneLine, RiAlertLine } from "react-icons/ri";
import { FloatingLabelInput, FloatingLabelTextarea } from "../components";
import { toast } from 'react-hot-toast';

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("")

  let contactForm = useRef();

  const submitForm = async (event) => {
    event.preventDefault();
    
    toast(
      `Your message: 
        Name: ${event.target.name.value}
        Email: ${event.target.email.value}
        Message: ${event.target.message.value}
      `,
      {duration: 7000}
    );
    setname("");
    setemail("");
    setmessage();
    contactForm.reset();
  };



  return (
    <>
      <form ref={(el) => contactForm = el} className='form-wrap' onSubmit={submitForm}>
        <FloatingLabelInput name="name" type="text" value={name}>
          Name
        </FloatingLabelInput>

        <FloatingLabelInput name="email" type="email" value={email}>
          Email
        </FloatingLabelInput>

        <FloatingLabelTextarea name="message" type="text" value={message}>
          Message
        </FloatingLabelTextarea>

        <div className="btn-container">
          <button type='submit' className='btn btn-submit'>
            Send <RiSendPlaneLine className='icon-submit'/>
          </button>
        </div>

        <div className="note">
          <RiAlertLine/>
          <p>No message is actually sent.</p>
        </div>

      </form>
    </>
  )
}

export default Contact