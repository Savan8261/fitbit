const fs = require("fs");
const { Console } = require("console");
const path = require("path");

let currentLogFileName = generateLogFileName();
let logStream = fs.createWriteStream(currentLogFileName, { flags: "a" });
let fileConsole = new Console({
  stdout: logStream,
  stderr: logStream,
});

function generateLogFileName() {
  const date = new Date();
  const day = date.toISOString().split("T")[0];
  return path.join(__dirname, `./logs/${day}-logs.log`);
}

function getTimestamp() {
  //set timestap style in log file as you refer
  return new Date().toISOString();
}

function updateLogFile() {
  const newLogFileName = generateLogFileName();
  if (newLogFileName !== currentLogFileName) {
    currentLogFileName = newLogFileName;
    logStream.end();
    logStream = fs.createWriteStream(currentLogFileName, { flags: "a" });
    fileConsole = new Console({
      stdout: logStream,
      stderr: logStream,
    });
  }
}

function logToFile(message) {
  updateLogFile();
  const timestampedLog = `[${getTimestamp()}] ${message}`;
  fileConsole.log(timestampedLog);
}

function errorToFile(message) {
  updateLogFile();
  const timestampedLog = `[${getTimestamp()}] ${message}`;
  fileConsole.error(timestampedLog);
}

function configConsole() {
  //give original logs in terminal
  const originalLog = console.log;
  const originalError = console.error;

  //modify the logs with timestamps to save in file
  console.log = (...logs) => {
    const logMessage = logs.join(" ");
    logToFile(logMessage);
    originalLog.apply(console, logs);
  };

  console.error = (...logs) => {
    const logMessage = logs.join(" ");
    errorToFile(logMessage);
    originalError.apply(console, logs);
  };
}

module.exports = { configConsole, generateLogFileName };
