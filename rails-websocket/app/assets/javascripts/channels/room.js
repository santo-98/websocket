App.room = App.cable.subscriptions.create("RoomChannel", {
  connected: function() {
    App.room.send({message: 'Connected successfully'});
  },
  disconnected: function() {},
  received: function(data) {}
});