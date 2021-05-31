import { API_WS_ROOT } from '../constants'
import ActionCable from 'actioncable'

function Connect(){
  const [data, setData] = useState("");

  const cable = ActionCable.createConsumer(API_WS_ROOT).subscriptions.create({
    channel: "RoomChannel"
  },{
    connected: ()=>{console.log("Connected")},
    received: data => handleReceivedMessage(data)
  });

  const handleReceivedMessage = (response) => {
    setData(response.message)
  }
}

export default Connect