var MessagesView = {

  $chats: $('#chats'),

  renderMessage: function(message) {
    this.$chats.append(MessageView.render(message));
  },

  initialize: function() {

  },

  render: function(data) {
    for (var i = 0; i < data.results.length; i++) {
      if (data.results[i].text !== undefined && data.results[i].username !== undefined) {
        this.renderMessage(data.results[i]);
      }
    }
  }

};