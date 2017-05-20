(function() {
  function Users($firebaseArray, $firebaseAuth) {
    var ref = firebase.database().ref().child('users');
    var auth = $firebaseArray(ref);


    return auth;

  }

  angular
    .module('blocChat')
    .factory('Users', ['$firebaseArray', '$firebaseAuth', Users]);
})();
