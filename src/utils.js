"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailTempl = void 0;
exports.sendEmail = sendEmail;
const config_1 = require("./config");
const nodemailer_1 = __importDefault(require("nodemailer"));
function sendEmail(options) {
    try {
        const transporter = nodemailer_1.default.createTransport({
            host: config_1.mailConfig.host,
            port: config_1.mailConfig.port,
            secure: false,
            tls: {
                rejectUnauthorized: false,
                minVersion: "TLSv1.2",
            },
            connectionTimeout: 60000,
            auth: {
                user: config_1.mailConfig.user,
                pass: config_1.mailConfig.pass,
            },
        });
        const mailOptions = {
            from: `"Portfolio" <${options.receiver}>`,
            to: options.receiver,
            subject: options.subject,
            html: options.html,
        };
        transporter.sendMail(mailOptions);
    }
    catch (err) {
        console.error(err);
    }
}
const emailTempl = ({ name, email, message, }) => `<div class="content">
    <p>Contact form</p>
    <p>Request received from email<strong>${email}</strong>. Below are contact details and the specifics of the request:</p>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
      
</div> `;
exports.emailTempl = emailTempl;
