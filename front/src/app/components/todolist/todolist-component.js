import controller from './todolist-controller';

export default {
  template: `
    <div>
      <div ng-repeat="todo in $ctrl.todos track by todo.id" ng-bind="todo.name"></div>
      <todo-input></todo-input>
    <div>
  `,
  controller
}
