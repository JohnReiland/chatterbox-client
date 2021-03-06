var RoomsView = {

  $button: $('#rooms_button'),
  $select: $('#rooms_select'),
  rooms: [], // will have all the rooms

  renderRoom: function(message) {

    if (message.text !== '' && message.roomname !== undefined && typeof message.roomname === 'string' && message.roomname.length !== 0 && message.roomname.length < 20){
      var currentRoom = message.roomname.toLowerCase();
      //debugger;
      if (currentRoom !== 'lobby' && RoomsView.rooms.indexOf(currentRoom) === -1){
        RoomsView.rooms.push(currentRoom);
      }
    }
  },

  populate: function() {
    for (var i = 0; i < RoomsView.rooms.length; i++) {
      var roomParent = document.getElementById("rooms_select");
      var newRoom = document.getElementById(RoomsView.rooms[i]);
      if (!roomParent.contains(newRoom)) {
        RoomsView.addRoom(RoomsView.rooms[i]);
      }
    }
  },

  initialize: function() {
  },

  handleSubmit: function() {
    var newRoom = prompt("New room name:", "");
    var roomObj = {roomname: newRoom, text: 'This should not appear'};
    RoomsView.renderRoom(roomObj)
    RoomsView.populate();
    var selectRoom = document.getElementById("rooms_select");
    selectRoom.options.namedItem(newRoom.toLowerCase()).selected = true;
    App.roomname = selectRoom.options[selectRoom.selectedIndex].text;
    App.fetch();
  },

  addRoom: function (roomName) {
    var roomObj = {roomname: roomName};
    RoomsView.$select.append(Rooms.render(roomObj));
  },

  selectRoom: function(event) {
    var selectRoom = document.getElementById("rooms_select");
    App.roomname = selectRoom.options[selectRoom.selectedIndex].text;
    console.log("chatterbox changed to room: " + App.roomname);
    App.fetch();
  },

  render: function(data) {  // var data = {results: [{...}]}
    for (var i = 0; i < data.results.length; i++) {
      RoomsView.renderRoom(data.results[i]);
    }
    RoomsView.populate();
  }

};
