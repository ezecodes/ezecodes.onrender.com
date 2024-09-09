import dotenv from "dotenv";
dotenv.config();

export const port = process.env.port || 3000;

export const contactEmailAddress = process.env.contactEmailAddress;

export const mailConfig = {
  host: process.env.mailHost,
  pass: process.env.mailPass,
  user: process.env.mailUser,
  port: process.env.mailPort,
};
