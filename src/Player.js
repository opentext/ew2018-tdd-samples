class Player {
  
  constructor() {
    const Speaker = require('speaker');
    this._speaker = new Speaker({
      channels: 2,
      bitDepth: 16,
      sampleRate: 44100
    });
  }
}

module.exports = Player;