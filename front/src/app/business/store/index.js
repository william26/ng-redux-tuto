import angular from 'angular';

import appStoreProvider from './app-store-provider';

export default angular
  .module('app.business.store', [])

  .provider('appStore', appStoreProvider)

  .name;
