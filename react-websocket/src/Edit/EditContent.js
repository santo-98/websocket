function EditContent(){

  function handleOnInput(){
    let keyPressed = document.getElementById("userContent").value
    console.log(keyPressed)
  }

  return(
    <>
      <textarea className="textarea" id="userContent" onInput={handleOnInput}></textarea>
    </>
  )
}

export default EditContent