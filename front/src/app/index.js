import angular from 'angular';
import ngRedux from 'ng-redux';
import uiRouter from 'angular-ui-router';

import businessModule from './business';
import componentsModule from './components';

angular
  .module('app', [
    ngRedux,
    uiRouter,
    businessModule,
    componentsModule
  ])

  .config((appStoreProvider) => {
    appStoreProvider.initializeStore();
  })

  .config(($stateProvider) => {
    $stateProvider.state('todolist', {
      url: '',
      template: '<todolist></todolist>'
    });
  });

angular.bootstrap(document.querySelector('#root'), ['app']);
