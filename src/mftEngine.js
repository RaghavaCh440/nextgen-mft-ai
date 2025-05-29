const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const { predictTransferTime } = require('./prediction');
const { detectAnomalyFromCSV } = require('./anomaly');

function uploadFile({ provider, sourcePath, destination, configPath }) {
    console.log(`Uploading to ${provider}: ${sourcePath} -> ${destination}`);
    // Placeholder: add actual logic for GCS, S3, etc.
}

function predictTime(fileSizeMB) {
    return predictTransferTime(fileSizeMB);
}

function detectAnomaly(logFilePath) {
    return detectAnomalyFromCSV(logFilePath);
}

module.exports = { uploadFile, predictTime, detectAnomaly };
