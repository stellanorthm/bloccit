(function() {
     function HomeCtrl(Room, $uibModal) {
       this.rooms = Room.all;

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


     }

     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
 })();
