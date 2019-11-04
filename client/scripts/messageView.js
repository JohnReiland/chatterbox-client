var MessageView = {

  render: _.template(`

      <div id="<%- userID %>" onClick="Friends.friendshipToggle(this.id)" class="chat">
        <div class="username"><%- username %></div>
        <p class="message"><%- text %></p>
      </div>

    `),

    renderFriend: _.template(`

    <div id="<%- userID %>" onClick="Friends.friendshipToggle(this.id)" class="chat friend">
      <div class="username"><%- username %></div>
      <p class="message"><%- text %></p>
    </div>

  `)

};



