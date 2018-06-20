const fs = require('fs');
const lame = require('lame');
const Speaker = require('speaker');

class Player {
  
  constructor() {
  }
  
  load(file) {
    this._decoder = new lame.Decoder();
    this._stream = fs.createReadStream(file);
    this._speaker = this._decoder.pipe(new Speaker());
  }
  
  play() {
    if (this._decoder) {
      this._stream.on('data', chunk => {
        this._decoder.write(chunk);
      });
      this._isPlaying = true;
      console.log('Playing audio');
    }
  }
  
  pause() {
    if (this._decoder) {
      this._decoder.unpipe();
      this._isPlaying = false;
      console.log('Pausing audio playback');
    }
  }
  
  reset() {
    this.pause();
    this._speaker.close(true);
    this._decoder = null;
    this._stream = null;
    this._speaker = null;
  }
  
  isPlaying() {
    return this._isPlaying;
  }
  
  getCurrentAudioStream() {
    return this._stream;
  }
  
  getCurrentSpeaker() {
    return this._speaker;
  }
  
  getCurrentDecoder() {
    return this._decoder;
  }
}

module.exports = Player;