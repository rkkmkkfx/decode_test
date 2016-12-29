angular
  .module('workspace', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'restangular', 'ui.router', 'ngMaterial', 'toastr'])
  .controller('AppController', app)
  .directive('userAvatar', avatar);

function app($mdSidenav) {
  var vm = this;
  vm.openRightMenu = openRightMenu;

  function openRightMenu() {
    $mdSidenav('right').toggle();
  }
}

function avatar() {
  return {
    replace: true,
    template: '<img src="assets/images/user.png" alt=""/>'
  }
}