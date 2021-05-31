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

  const handleOnInput = (keyPressed) => {
    console.log(keyPressed)
    connection.current.perform("data_received",{message: keyPressed})
  }


  const handleReceivedMessage = (response) => {
    setData(response.message)
  }

  return(
    <>
      <Editor
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar: 'undo redo | formatselect | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
        onEditorChange={handleOnInput}
        value={data}
      />
    </>
  )
}

export default EditContent