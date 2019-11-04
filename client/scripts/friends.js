var Friends = {

  usernameList: [],
  friendList: [],

  friendshipToggle: function(username) {
    Friends.friendList.push(username);
    console.log(username);
  }

};