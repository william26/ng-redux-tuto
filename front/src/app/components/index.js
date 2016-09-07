import angular from 'angular';

import todolistModule from './todolist';
import todoInputModule from './todo-input';

export default angular
  .module('app.components', [
    todolistModule,
    todoInputModule
  ])

  .name;
