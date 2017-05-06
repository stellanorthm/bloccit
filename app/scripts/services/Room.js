(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child('rooms');
    var rooms = $firebaseArray(ref);

    /*rooms.$add({
      text: 'Hello'
    });*/

    var addRoom = function (roomText) {
      console.log(roomText);
      rooms.$add({ roomText }).then(function(ref) {

      var id = ref.key;
      console.log(rooms.$indexFor(roomText));
})};

    return {
      all: rooms,
      newRoom: addRoom
    };

  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
