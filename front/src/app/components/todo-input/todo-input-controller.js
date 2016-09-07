export default function TodoInputController($ngRedux, todoActions) {

  this.addTodo = function() {
    $ngRedux.dispatch(todoActions.create(this.todoName));
  };

}
