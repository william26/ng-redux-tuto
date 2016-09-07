import angular from 'angular';

import todosModule from './todos';
import storeModule from './store';

export default angular
  .module('app.business', [
    storeModule,
    todosModule
  ])

  .name;
