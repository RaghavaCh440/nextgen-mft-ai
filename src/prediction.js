function predictTransferTime(fileSizeMB) {
    // Simple ML-like prediction: time (sec) = 0.5 * fileSizeMB + 2
    return 0.5 * fileSizeMB + 2;
}

module.exports = { predictTransferTime };
