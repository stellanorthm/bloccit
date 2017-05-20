(function() {
  function BlocChatCookies($cookies, $uibModal) {

    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl: '/templates/cookies.html',
        controller: 'CookieCtrl as cookie',
        size: 'sm',
        keyboard: false,
        backdrop: 'static'
      })
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
