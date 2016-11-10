angular
  .module('app.home', ['app'])
  .controller('HomeController', HomeController);

  HomeController.$inject = [];

function HomeController() {

  vm      = this;
  vm.text = 'Flexbox Grid';

}
