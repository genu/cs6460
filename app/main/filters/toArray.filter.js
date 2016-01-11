'use strict';

angular.module('main').filter('toArray', function () {
  return function (input) {
    if (!(input instanceof Object)) return input;
    return _.map(input, function (val, key) {
      return Object.defineProperty(val, '$key', {__proto__: null, value: key});
    });
  };
});
