(function() {

  function ModalInstanceCtrl(modalInstance) {
    var $ctrl = this;
    //$ctrl.items = items;
    //$ctrl.selected = {
    //item: $ctrl.items[0]
    //};

    $ctrl.ok = function() {
     $close(true);
    };

    $ctrl.cancel = function() {
     $ctrl.dismiss('cancel');
    };

  };

  angular
    .module('blocChat')
    .controller('ModalInstanceCtrl', [ModalInstanceCtrl])
})();
