declare namespace NodeJS {
  interface ProcessEnv {
    port?: number;
    mailHost?: string;
    mailPass?: string;
    mailUser?: string;
    mailPort?: string;
  }
}

declare module 'nodemailer';