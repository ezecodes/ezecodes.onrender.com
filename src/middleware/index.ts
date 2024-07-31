import { NextFunction, Response, Request } from "express";
import helmet from "helmet";
import { port } from "../config";

export default () =>
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        connectSrc: ["'self'"],
        frameSrc: ["'self'"],
        styleSrc: [
          "'self'",
          "stackpath.bootstrapcdn.com",
          "'unsafe-inline'",
          "fonts.googleapis.com",
          "cdnjs.cloudflare.com",
        ],
        scriptSrc: ["'self'", "cdn.jsdelivr.net", "unpkg.com"],
        imgSrc: [
          "'self'",
          "https://miro.medium.com/v2/resize:fit:700/0*IF5Z05nkdvA3JDXI.png",
          "upload.wikimedia.org",
          "avatars.githubusercontent.com",
          "raw.githubusercontent.com",
          "github.githubassets.com",
          "docs.amplify.aws/assets/logo-dark.svg",
          "www.vectorlogo.zone",
          "cdn.worldvectorlogo.com",
          "reactnative.dev/img/header_logo.svg",
        ],
      },
    },
    frameguard: {
      action: "deny",
    },
    noSniff: true,
  });

export function onError(error: any | Error): void {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

export const customHeaders = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "DENY");
    res.setHeader("X-Powered-By", "Jah");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("X-XSS-Protection", "1; mode=block");
    next();
  };
};
