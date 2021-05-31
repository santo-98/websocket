class RoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "room_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def data_received(data)
    puts data
    ActionCable.server.broadcast("room_channel", data)
  end
end
