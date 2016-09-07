import angular from 'angular';

import todoActions, {todoActionTypes} from './todo-actions';
import todoReducerProvider from './todo-reducer';

export default angular
  .module('app.business.todos', [
    'app.business.store'
  ])

  .constant('todoActionTypes', todoActionTypes)
  .provider('todoReducer', todoReducerProvider)
  .service('todoActions', todoActions)

  .config((todoReducerProvider, appStoreProvider) => {
    appStoreProvider.registerReducer('todos', todoReducerProvider.reducer);
  })


  .name;
