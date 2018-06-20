const assert = require('assert');
const Player = require('../src/Player');

describe('Player', function () {
  
  describe('Instantiating Player', function () {
    it('should create a Player instance', function () {
      const player = new Player();
      assert.notEqual(player, undefined);
    });
  });
  
});