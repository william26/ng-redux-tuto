export const todoActionTypes = {
  FETCH_START: 'TODOS_FETCH_START',
  FETCH_SUCCESS: 'TODOS_FETCH_SUCCESS',
  FETCH_ERROR: 'TODOS_FETCH_ERROR'
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

}
