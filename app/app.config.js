angular
  .module('app.config', ['app'])
  .config(configApp);

  configApp.$inject = ['$stateProvider', '$urlRouterProvider'];

function configApp($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('app', {
    name: 'app',
    url: '',
    abstract: true,
    views: {
      'header': {
        templateUrl: 'app/header/header.html',
        controller: 'HeaderController',
        controllerAs: 'vm'
      }
    }
  })

  .state('app.home', {
    name: 'home',
    url: '/',
    views: {
      'content@': {
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      }
    }
  })

  .state('app.skills', {
    name: 'skills',
    url: '/skills',
    views: {
      'content@': {
        templateUrl: 'app/skills/skills.html',
        controller: 'SkillsController',
        controllerAs: 'vm'
      }
    }
  })

  $urlRouterProvider.otherwise('/');

  console.debug('configuration completed');
}