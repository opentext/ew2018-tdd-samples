const assert = require('assert');
const Player = require('../src/Player');
const path = require('path');

describe('Player', function () {
  
  describe('Instantiating Player', function () {
    it('should create a Player instance', function () {
      const player = new Player();
      assert.notEqual(player, undefined);
    });
  });
  
  describe('Loading audio from a file', function () {
    it('should load audio from a relative file path', function () {
      const player = new Player();
      const file = path.join(__dirname, 'test.mp3');
      player.load(file);
      assert.notEqual(player._decoder, undefined);
      assert.notEqual(player._speaker, undefined);
      assert.notEqual(player._stream, undefined);
    });
  });
  
  describe('Playback', function () {
    let player;
    
    beforeEach(function () {
      player = new Player();
      const file = path.join(__dirname, 'test.mp3');
      return player.load(file);
    });
    
    it('should begin playback', function (done) {
      player.play();
      assert.equal(player.isPlaying(), true);
      // pause playback after some delay
      this.timeout(6000);
      setTimeout(function () {
        player.pause();
        done();
      }, 5000);
    });
  
    it('should pause playback', function () {
      player.pause();
      assert.equal(player.isPlaying(), false);
    });
    
    it('should return the current audio file', function () {
      assert.equal(player.getCurrentAudioStream(), player._stream);
    });
  
    it('should clear the current audio file', function () {
      player.reset();
      assert.equal(player.isPlaying(), false);
      assert.equal(player.getCurrentAudioStream(), null);
      assert.equal(player.getCurrentDecoder(), null);
      assert.equal(player.getCurrentSpeaker(), null);
    });
  });
});