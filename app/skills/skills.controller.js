angular
  .module('app.skills', ['app'])
  .controller('SkillsController', SkillsController)

  SkillsController.$inject = [];

  function SkillsController() {
    vm = this;
  }