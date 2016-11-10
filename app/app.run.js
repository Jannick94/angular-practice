angular
  .module('app.run', ['ui.router', 'app', 'app.home'])
  .run(runApp)

function runApp() {
  console.debug('app started');
}