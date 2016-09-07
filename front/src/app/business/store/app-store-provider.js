import {noop} from 'angular';
import * as redux from 'redux';
import reduxThunk from 'redux-thunk';

export default function appStoreProvider($ngReduxProvider, $windowProvider) {

  this.reducers = {};

  this.registerReducer = function (key, reducer) {
    this.reducers[key] = reducer;
  };

  this.initializeStore = function () {
    const $window = $windowProvider.$get();
    $ngReduxProvider.createStoreWith(
      redux.combineReducers(this.reducers),
      [reduxThunk],
      [$window.devToolsExtension ? $window.devToolsExtension() : f => f],
      {}
    );
  };

  this.$get = noop;
}
