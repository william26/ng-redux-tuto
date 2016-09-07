export default function TodolistController($ngRedux, todoActions) {

  this.$onDestroy = $ngRedux.connect(state => {
    const todos = state.todos;

    return {
      todos
    };
  })(this);


  $ngRedux.dispatch(todoActions.fetch());
}
