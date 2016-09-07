import {noop} from 'angular';

export default function TodoReducerProvider(todoActionTypes) {

  const {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_ERROR
  } = todoActionTypes;

  const initialState = [];


  this[FETCH_START] = (state) => {
    return state;
  };

  this[FETCH_SUCCESS] = (state, {todos}) => {
    return todos;
  };

  this[FETCH_ERROR] = (state, {error}) => {
    return state;
  };


  this.reducer = (state = initialState, {type, payload}) => {
    return typeof this[type] === 'function' ? this[type](state, payload) : state;
  };

  this.$get = noop;
}
