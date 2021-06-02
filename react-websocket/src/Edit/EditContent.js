import ActionCable from 'actioncable'
import React, { useEffect, useState, useRef } from 'react';
import { API_WS_ROOT } from '../constants'
import { Editor } from '@tinymce/tinymce-react';

function EditContent(){
  const [data, setData] = useState("");
  const connection = useRef();
  useEffect(() => {
    connection.current = ActionCable.createConsumer(API_WS_ROOT).subscriptions.create(
    {
      channel: "RoomChannel"
    },{
      connected: ()=>{ console.log("Connected") },
      received: response => handleReceivedMessage(response)
    })
  }, [])

  const handleOnInput = () => {
    let keyPressed = document.getElementById("userContent").value
    console.log("message sent - " + keyPressed)
    connection.current.perform("data_received",{message: keyPressed})
  }


  const handleReceivedMessage = (response) => {
    setData(response.message)
    console.log("message recieved - " + response.message)
  }

  return(
    <>
      <textarea className="textarea" id="userContent" onInput={handleOnInput} value={data}></textarea>
    </>
  )
}

export default EditContent