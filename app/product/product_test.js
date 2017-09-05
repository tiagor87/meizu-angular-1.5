'use strict';

describe('product module', function() {

  beforeEach(module('myApp.product'));

  describe('product controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var phoneController = $controller('phoneController');
      expect(phoneController).toBeDefined();
    }));

  });
});