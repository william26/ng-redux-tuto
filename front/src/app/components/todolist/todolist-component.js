import controller from './todolist-controller';

export default {
  template: `
    <div>
      <div ng-repeat="todo in $ctrl.todos track by todo.get('id')" ng-bind="todo.get('name')"></div>
      <todo-input></todo-input>
    <div>
  `,
  controller
}
