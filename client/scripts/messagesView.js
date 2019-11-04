var MessagesView = {

  $chats: $('#chats'),

  renderMessage: function(message) {
        if (message.roomname.toLowerCase() === App.roomname) {
      MessagesView.$chats.append(MessageView.render(message));
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
    for (var i = 0; i < data.results.length; i++) {
      if (data.results[i].username !== undefined && data.results[i].text !== undefined && data.results[i].roomname !== undefined) {
        MessagesView.renderMessage(data.results[i]);
      }
    }
  },

  refresh: function() {
    App.fetch();
    setTimeout(function(){
      MessagesView.refresh();
    },5000)
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