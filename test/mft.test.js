const { predictTime } = require('../src/mftEngine');

console.log("Predicted Time for 100MB:", predictTime(100)); // Should log ~52
