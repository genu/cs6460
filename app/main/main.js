'use strict';
angular.module('main', ['ionic', 'ngCordova', 'pouchdb', 'ion-affix'])
  .run(function (API, DB) {
  })
  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    //$ionicConfigProvider.views.maxCache(0);
    $urlRouterProvider.otherwise('/main/messages');
    $stateProvider
      .state('main', {
        url: '/main',
        abstract: true,
        templateUrl: 'main/templates/menu.html',
        controller: 'MenuCtrl as menu'
      })
      .state('main.messages', {
        url: '/messages',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/messages.html',
            controller: 'MessagesCtrl as messages'
          }
        },
        resolve: {
          messages: function ($firebaseArray, Config) {
            return $firebaseArray(new Firebase(Config.ENV.FIREBASE_URL).child('messages')).$loaded();
          }
        }
      })
      .state('main.settings', {
        url: '/settings',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/settings.html',
            controller: 'SettingsCtrl as settings',
            resolve: {
              cacheSize: function (DB) {
                return DB.size();
              }
            }
          }
        }
      })
  })
;
