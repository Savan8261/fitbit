const cron = require("node-cron");
const path = require("path");
const fs = require("fs");
const uploadFileToFirebase = require("./Firebase/firebase-upload");

const scheduledLogTest = () => {
  cron.schedule("* * * * * *", () => {
    console.log("Console log test");
    console.error("Console error test");
  });
};

// if possible save to process env.
const MAX_RETRIES = 3;
const RETRY_DELAY = 5000; // Delay between retries in milliseconds (e.g., 5000 ms = 5 seconds)

const scheduledLogFilesUpload = () => {
  cron.schedule("0 0 * * *", async () => {
    let retries = 0;
    let uploaded = false;

    const date = new Date();
    date.setDate(date.getDate() - 1);
    const day = date.toISOString().split("T")[0];
    const logFileName = `./logs/${day}-logs.log`;
    const logFilePath = path.resolve(__dirname, logFileName);

    // Attempt file upload
    const attemptUpload = async () => {
      try {
        if (fs.existsSync(logFilePath)) {
          const file = {
            path: logFilePath,
            mimetype: "text/plain",
          };
          const firebaseFilePath = `logs/${path.basename(logFilePath)}`;
          const publicUrl = await uploadFileToFirebase(file, firebaseFilePath);
          console.log(`Log file uploaded successfully: ${publicUrl}`);

          // Delete file after successful upload
          fs.unlink(logFilePath, (err) => {
            if (err) {
              console.error(`Error deleting file: ${err.message}`);
            } else {
              console.log(`Log file deleted successfully: ${logFilePath}`);
            }
          });

          uploaded = true;
        } else {
          console.log(`Log file does not exist: ${logFilePath}`);
          uploaded = true; // Exit loop if file does not exist
        }
      } catch (error) {
        console.error(`Error uploading log file: ${error.message}`);
        if (retries < MAX_RETRIES) {
          retries++;
          console.log(
            `Retrying upload (${retries} of ${MAX_RETRIES}) in ${
              RETRY_DELAY / 1000
            } seconds...`
          );
          setTimeout(attemptUpload, RETRY_DELAY);
        } else {
          console.error(`Failed to upload file after ${MAX_RETRIES} attempts.`);
        }
      }
    };
    try {
      await attemptUpload();
      console.log("Log file uploaded to firebase.");
    } catch (error) {
      console.error(`file not uploaded, Error: ${error.message}`);
    }
  });
};

module.exports = { scheduledLogTest, scheduledLogFilesUpload };
