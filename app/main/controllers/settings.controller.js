'use strict';

angular.module('main').controller('SettingsCtrl', function ($rootScope, $state, $ionicHistory, $ionicPopup, cacheSize, DB) {
  var vm = this;

  this.cacheSize = cacheSize;

  $ionicHistory.nextViewOptions({
    historyRoot: true
  });

  this.clearCache = function () {
    DB.destroy().then(function () { // Delete the DB
      DB.init().then(function () { // rebuild the DB index
        $ionicHistory.clearCache();

        DB.size().then(function (info) {
          vm.cacheSize = info;
        });

        $ionicPopup.alert({
          title: "Cache Cleared",
          subTitle: 'Songs will automatically be cached as you view them'
        }).then(function () {

        })
      })
    })
  }
});
