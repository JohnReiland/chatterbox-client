var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  rooms: [], // will have all the rooms

  renderRoom: function(message) {

    if (message.roomname !== undefined && typeof message.roomname === 'string'){
      var currentRoom = message.roomname.toLowerCase();
      if (RoomsView.rooms.indexOf(currentRoom) === -1){
        RoomsView.rooms.push(currentRoom);
      }
    }
  },

  initialize: function() {
  },

  render: function(data) {  // var data = {results: [{...}]}
  //var chatlist = MessagesView.$chats;
    // while (document.getElementById("chats").hasChildNodes()) {
    //   document.getElementById("chats").removeChild(document.getElementById("chats").lastChild);
    // }

    for (var i = 0; i < data.results.length; i++) {
      RoomsView.renderRoom(data.results[i]);
    }
  }

};
