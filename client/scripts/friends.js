var Friends = {

  usernameList: [],
  friendList: [],

   usernameAdd: function(username) {
    if (Friends.usernameList.indexOf(username) === -1) {
      Friends.usernameList.push(username);
    }
  },

  friendshipToggle: function(userID) {
    if (Friends.friendList.indexOf(parseInt(userID)) === -1) {
      Friends.friendList.push(parseInt(userID));
      console.log("chatterbox :  " + Friends.usernameList[userID] + " is now your friend");
    } else {
      Friends.friendList.splice(Friends.friendList.indexOf(userID), 1);
      console.log("chatterbox :  " + Friends.usernameList[userID] + " is no longer your friend");
    }
    App.fetch();
  }

};