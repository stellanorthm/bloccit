(function() {
  function ModalInstanceCtrl(Room, modalInstance) {
    var $ctrl = this;
    //$ctrl.rooms = Room.all;
    $ctrl.rooms = Room.newRoom;
    //$ctrl.items = items;
    //$ctrl.selected = {
    //item: $ctrl.items[0]
    //};

    $ctrl.newRoom = function() {
        var roomText = $ctrl.newRoomText;
        $ctrl.rooms(roomText);
    }

  };

  angular
    .module('blocChat')
    .controller('ModalInstanceCtrl', ['Room', ModalInstanceCtrl])
})();
