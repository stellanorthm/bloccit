(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child('rooms');
    var rooms = $firebaseArray(ref);

this.addRoom = function() {
    rooms.$add({
      text: this.newRoomText
    });
  };

    /*rooms.$add({
      text: 'Hello'
    });*/

    return {
      all: rooms
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
