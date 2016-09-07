import angular from 'angular';

import todolistComponent from './todolist-component';

export default angular
  .module('app.components.todolist', [])

  .component('todolist', todolistComponent)

  .name;
