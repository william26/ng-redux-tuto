import angular from 'angular';

import todoInputComponent from './todo-input-component';

export default angular
  .module('app.components.todo-input', [])

  .component('todoInput', todoInputComponent)

  .name;
