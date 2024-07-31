import { mailConfig } from "./config";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export function sendEmail(options: {
  receiver: string;
  subject: string;
  html: string;
}): void {
  try {
    const transporter = nodemailer.createTransport({
      host: mailConfig.host,
      port: mailConfig.port,
      secure: false,
      tls: {
        rejectUnauthorized: false,
        minVersion: "TLSv1.2",
      },
      connectionTimeout: 60000,
      auth: {
        user: mailConfig.user,
        pass: mailConfig.pass,
      },
    } as SMTPTransport.Options);
    const mailOptions = {
      from: `"Portfolio" <${options.receiver}>`,
      to: options.receiver,
      subject: options.subject,
      html: options.html,
    };
    transporter.sendMail(mailOptions);
  } catch (err) {
    console.error(err);
  }
}

export const emailTempl = ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => `<div class="content">
    <p>Contact form</p>
    <p>Request received from email<strong>${email}</strong>. Below are contact details and the specifics of the request:</p>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
      
</div> `;
