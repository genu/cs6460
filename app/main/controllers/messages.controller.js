'use strict';
angular.module('main').controller('MessagesCtrl', function ($rootScope, $timeout, $location, $ionicScrollDelegate, messages) {
  var vm = this;

  this.input = '';

  this.user = {
    _id: 'sally',
    pic: '',
    username: 'john'
  };

  this.data = messages;

  this.send = function (input) {
    this.data.$add({
      userId: this.user._id,
      text: input
    });

    this.getFeedback();
  };

  this.getFeedback = function () {
    vm.data.push({
      userId: 'loader',
      text: 'loading...'
    });
    $timeout(function () {
      vm.data.splice(vm.data.length - 1, 1);
      vm.data.$add({
        userId: 'bob',
        text: 'Hang in there buddy!'
      });
      vm.input = '';
    }, 2000);
  };

  this.goToLetter = function (id) {
    $location.hash(id);
    $ionicScrollDelegate.anchorScroll();
  }
});
