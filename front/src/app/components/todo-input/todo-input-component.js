import controller from './todo-input-controller';

export default {
  template: `
    <input type="text" ng-model="$ctrl.todoName" />
    <button ng-click="$ctrl.addTodo()">ADD</button>
  `,
  controller
}
