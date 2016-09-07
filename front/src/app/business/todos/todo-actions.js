export const todoActionTypes = {
  FETCH_START: 'TODOS_FETCH_START',
  FETCH_SUCCESS: 'TODOS_FETCH_SUCCESS',
  FETCH_ERROR: 'TODOS_FETCH_ERROR',

  CREATE_START: 'TODOS_CREATE_START',
  CREATE_SUCCESS: 'TODOS_CREATE_SUCCESS',
  CREATE_ERROR: 'TODOS_CREATE_ERROR'
};

export default function ($http) {

  this.fetchStart = () => ({
    type: todoActionTypes.FETCH_START
  });

  this.fetchSuccess = todos => ({
    type: todoActionTypes.FETCH_SUCCESS,
    payload: {todos}
  });

  this.fetchError = error => ({
    type: todoActionTypes.FETCH_ERROR,
    payload: {error}
  });

  this.fetch = () => dispatch => {
    dispatch(this.fetchStart());

    $http({
      url: '/api/todo',
      method: 'GET'
    })
      .then(response => {
        dispatch(this.fetchSuccess(response.data))
      })
      .catch(err => {
        dispatch(this.fetchError(err));
      });
  };

  this.createStart = () => ({
    type: todoActionTypes.CREATE_START
  });

  this.createSuccess = todo => ({
    type: todoActionTypes.CREATE_SUCCESS,
    payload: {todo}
  });

  this.createError = error => ({
    type: todoActionTypes.CREATE_ERROR,
    payload: {error}
  });

  this.create = todoName => dispatch => {
    dispatch(this.createStart());

    $http({
      url: '/api/todo',
      method: 'POST',
      data: {
        name: todoName
      }
    })
      .then(response => {
        dispatch(this.createSuccess(response.data));
      })
      .catch(error => {
        dispatch(this.createError(error));
      })
  };

}
