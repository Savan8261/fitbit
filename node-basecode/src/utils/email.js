const nodemailer = require("nodemailer");
const ejs = require("ejs");
const htmlToText = require("html-to-text");

module.exports = class Email {
  constructor(user) {
    this.to = user.email;
    this.firstName = user.firstName;
    this.from = "Admin <admin@email.com>";
  }

  newTransport() {
    return nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: process.env.EMAIL_ORG_USER, //the organization's email id(gmail)
        pass: process.env.EMAIL_ORG_PASS, //the organization's password(gmail)
      },
    });
  }

  // Send the actual email
  async send(templatePath, subject) {
    // 1) Render HTML based on a ejs templatePath
    const html = await ejs.renderFile(templatePath, {
      firstName: this.firstName,
      subject,
    });

    // 2) Define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText.convert(html),
    };

    // 3) Create a transport and send email
    await this.newTransport().sendMail(mailOptions);
  }

  //send pug template with template name and message as arguments
  async sendWelcome() {
    await this.send(
      `${__dirname}/mailer/templates/welcome/welcome.ejs`,
      "Welcome to the Fitbit Family!"
    );
  }
};
