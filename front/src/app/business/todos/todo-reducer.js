import {noop} from 'angular';

export default function TodoReducerProvider(todoActionTypes) {

  const {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_ERROR,

    CREATE_START,
    CREATE_SUCCESS,
    CREATE_ERROR
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

  this[CREATE_START] = state => state;

  this[CREATE_SUCCESS] = (state, {todo}) => {
    return [...state, todo];
  };

  this[CREATE_ERROR] = state => state;


  this.reducer = (state = initialState, {type, payload}) => {
    return typeof this[type] === 'function' ? this[type](state, payload) : state;
  };

  this.$get = noop;
}
