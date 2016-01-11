'use strict';

angular.module('main').constant('Config', {

  ENV: {
    /*inject-env*/
    'FIREBASE_URL': 'https://cs6460.firebaseio.com'
    /*endinject*/
  },

  // gulp build-vars: injects build vars
  BUILD: {
    /*inject-build*/
    /*endinject*/
  }

});
