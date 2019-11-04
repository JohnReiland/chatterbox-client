var MessagesView = {

  $chats: $('#chats'),

  renderMessage: function(message) {
        if (message.roomname.toLowerCase() === App.roomname) {
          //debugger;
          var friendIndex = Friends.friendList.indexOf(parseInt(message.userID));
          if (friendIndex !== -1) {
            MessagesView.$chats.append(MessageView.renderFriend(message));
          } else {
            MessagesView.$chats.append(MessageView.render(message));
          }
    }
  },

  initialize: function() {
    MessagesView.refresh();
  },

  //data is an object; one property -- called results ---> [{}, {},.....]
  render: function(data) {  // var data = {results: [{...}]}
  //var chatlist = MessagesView.$chats;
    while (document.getElementById("chats").hasChildNodes()) {
      document.getElementById("chats").removeChild(document.getElementById("chats").lastChild);
    }
    Friends.userList = [];
    for (var i = 0; i < data.results.length; i++) {
      if (data.results[i].username !== undefined && data.results[i].text !== undefined && data.results[i].roomname !== undefined) {
        Friends.usernameAdd(data.results[i].username);
        var userID = Friends.usernameList.indexOf(data.results[i].username);
        var tempObj = {...data.results[i], userID: userID.toString()};
        //debugger;
        MessagesView.renderMessage(tempObj);
      }
    }
  },

  refresh: function() {
    App.fetch();
    setTimeout(function(){
      MessagesView.refresh();
    },1000)
  }
};



// render: function(data) {  // var data = {results: [{...}]}
// //var chatlist = MessagesView.$chats;
//   while (document.getElementById("chats").hasChildNodes()) {
//     document.getElementById("chats").removeChild(document.getElementById("chats").lastChild);
//   }
//   for (var i = 0; i < data.results.length; i++) {
//     MessagesView.renderMessage(data.results[i]);
//   }
// },