(function() {
    'use strict';

  angular
      .module('app')
      .controller('InitialCtrl', InitialCtrl);

      InitialCtrl.$inject = ['InitialFactory'];

  function InitialCtrl(InitialFactory) {
    var vm = this;

    vm.eng = 34;

    activate();
    function activate() {

    }
  }

})();
