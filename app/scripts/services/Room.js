(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child('rooms');
    var rooms = $firebaseArray(ref);

    var addRoom = function (roomText) {
        rooms.$add({ book: roomText }).then(function(ref) {
        var id = ref.key;
        rooms.$indexFor(id); // returns location in the array
    }
)};

    return {
      all: rooms,
      newRoom: addRoom
    };

  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
