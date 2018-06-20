const assert = require('assert');
const Player = require('../src/Player');

describe('Player', function () {
  
  describe('Instantiating Player', function () {
    it('should create a Player instance', function () {
      const player = new Player();
      assert.notEqual(player, undefined);
    });
    
    it('should auto instantiate a Speaker instance', function () {
      const player = new Player();
      assert.notEqual(player._speaker, undefined);
    });
  });
  
  describe('Loading audio from a file', function (done) {
    it('should load audio from a relative file path', function () {
      const player = new Player();
      const file = './test.mp3';
      return player.load(file).then(function (result) {
        assert.ok(result);
        done();
      });
    });
  });
  
  describe('Playback', function () {
    let player;
    
    beforeEach(function () {
      player = new Player();
      const file = './test.mp3';
      return player.load(file);
    });
    
    it('should begin playback', function () {
      player.play();
      assert.equal(player.isPlaying(), true);
    });
  
    it('should pause playback', function () {
      player.pause();
      assert.equal(player.isPlaying(), false);
    });
    
    it('should return the current audio file', function () {
      assert.equal(player.getCurrentAudioFile(), null);
    });
  
    it('should clear the current audio file', function () {
      player.reset();
      assert.equal(player.isPlaying(), false);
      assert.equal(player.getCurrentAudioFile(), null);
    });
    
  });
  
});