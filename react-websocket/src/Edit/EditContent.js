import ActionCable from 'actioncable'
import React, { Component, useEffect, useState, useRef } from 'react';
import { ActionCableProvider, ActionCableConsumer} from 'react-actioncable-provider'
import { API_WS_ROOT } from '../constants'

function EditContent(){
  const [data, setData] = useState("");

  const handleOnInput = () => {
    let keyPressed = document.getElementById("userContent").value
    console.log(keyPressed)
  }

  useEffect(()=>{
    const cable = ActionCable.createConsumer(API_WS_ROOT).subscriptions.create(
    {
      channel: "RoomChannel"
    },{
      connected: ()=>{console.log("Connected")},
      received: data => handleReceivedMessage(data)
    });
	})
  

  const handleReceivedMessage = (response) => {
    setData(response)
    // const message = response;
    // console.log(message)
    // const conversations = [...this.state.conversations];
    // const conversation = conversations.find(
    //   conversation => conversation.id === message.conversation_id
    // );
  }

  return(
    <>
      {console.log("Received - " + data)}
      <textarea className="textarea" id="userContent" onInput={handleOnInput} value={data ? data : null}></textarea>
    </>
  )
}

export default EditContent