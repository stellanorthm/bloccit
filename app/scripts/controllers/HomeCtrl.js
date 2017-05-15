(function() {
     function HomeCtrl(Room, Message, $uibModal) {
       this.rooms = Room.all;

       this.currentRoom = "";

       this.messages = "";

       this.roomShow = false;

       this.open = function (size) {
       this.modalInstance = $uibModal.open({
          animation: this.animationsEnabled,
          templateUrl: '/templates/modal.html',
          controller: 'ModalInstanceCtrl',
          controllerAs: '$ctrl',
          size: size ? size : 'sm',
          resolve: {
            items: function () {
              return 'hello world';
            }
          }
        });
      }

      this.setClickedRoom = function(clickedRoom) {
        this.currentRoom = clickedRoom;
        this.messages = Message.getByRoomId(this.currentRoom.$id);
      }

      this.setRoomShow = function() {
        this.roomShow = true;
      }


     }

     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
 })();
