var MessageView = {



  render: _.template(`

      <div class="chat">
        <div class="username"><%- username %></div>
        <p class="message"><%- text %></p>
      </div>

    `)

};



