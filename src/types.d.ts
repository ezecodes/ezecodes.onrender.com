declare namespace NodeJS {
  interface ProcessEnv {
    port?: number;
    mailHost?: string;
    mailPass?: string;
    mailUser?: string;
    mailPort?: string;
  }
}

export type RequestBodyType = {
  name: string;
  email: string;
  message: string;
};

declare module "nodemailer";
