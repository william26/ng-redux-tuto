import {noop} from 'angular';
import immutable from 'immutable';

export default function TodoReducerProvider(todoActionTypes) {

  const {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_ERROR,

    CREATE_START,
    CREATE_SUCCESS,
    CREATE_ERROR
  } = todoActionTypes;

  const initialState = new immutable.Map();


  this[FETCH_START] = (state) => {
    return state;
  };

  this[FETCH_SUCCESS] = (state, {todos}) => {
    return todos.reduce((todosMap, todo) => {
      return todosMap.set(todo.id, immutable.fromJS(todo));
    }, new immutable.Map());
  };

  this[FETCH_ERROR] = (state, {error}) => {
    return state;
  };

  this[CREATE_START] = state => state;

  this[CREATE_SUCCESS] = (state, {todo}) => {
    return state.set(todo.id, immutable.fromJS(todo));
  };

  this[CREATE_ERROR] = state => state;


  this.reducer = (state = initialState, {type, payload}) => {
    return typeof this[type] === 'function' ? this[type](state, payload) : state;
  };

  this.$get = noop;
}
