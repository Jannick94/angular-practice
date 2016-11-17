angular
  .module('app.header', ['app'])
  .controller('HeaderController', HeaderController)

  HeaderController.$inject = [];

  function HeaderController() {
    var vm = this;
  }