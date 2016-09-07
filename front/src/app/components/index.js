import angular from 'angular';

import todolistModule from './todolist';

export default angular
  .module('app.components', [
    todolistModule
  ])

  .name;
