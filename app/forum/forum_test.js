'use strict';

describe('forum module', function() {

  beforeEach(module('myApp.forum'));

  describe('forum controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var forumController = $controller('forumController');
      expect(forumController).toBeDefined();
    }));

  });
});