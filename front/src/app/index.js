import angular from 'angular';
import reduxThunk from 'redux-thunk';
import 'redux';
import ngRedux from 'ng-redux';

angular
  .module('app', [
    ngRedux
  ])

  .config(($ngReduxProvider, $windowProvider) => {

    const $window = $windowProvider.$get();
    $ngReduxProvider.createStoreWith(
      function (state, action) {
        return state;
      },
      [reduxThunk],
      [$window.devToolsExtension ? $window.devToolsExtension() : f => f],
      {}
    );
  })

  .run(($ngRedux) => {
    console.log('running');

    $ngRedux.dispatch({
      type: 'hello world',
      payload: {bla: 'l'}
    });
  });

angular.bootstrap(document.querySelector('#root'), ['app']);
