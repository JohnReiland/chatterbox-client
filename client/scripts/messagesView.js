var MessagesView = {

  $chats: $('#chats'),

  renderMessage: function(message) {

    if (message.username !== undefined && message.text !== undefined) {
      MessagesView.$chats.append(MessageView.render(message));
    }
  },

  initialize: function() {

  },

  //data is an object; one property -- called results ---> [{}, {},.....]
  render: function(data) {  // var data = {results: [{...}]}
    for (var i = 0; i < data.results.length; i++) {
      MessagesView.renderMessage(data.results[i]);
    }
  }
};
