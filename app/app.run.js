angular
  .module('app.run', [
    'ui.router', 
    'ngAnimate',
    'app', 
    'app.header',
    'app.home', 
    'app.skills'
  ])
  .run(runApp)

function runApp() {
  console.debug('app started');
}