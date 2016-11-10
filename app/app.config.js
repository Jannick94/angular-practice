angular
  .module('app.config', ['app'])
  .config(configApp);

  configApp.$inject = ['$stateProvider', '$urlRouterProvider'];

function configApp($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('app', {
    name: 'app',
    url: '/',
    templateUrl: 'app/home/home.html',
    controller: 'HomeController',
    controllerAs: 'vm'
  })

  $urlRouterProvider.otherwise('/');

  console.debug('configuration completed');
}