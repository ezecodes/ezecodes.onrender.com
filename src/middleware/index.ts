import { NextFunction, Response, Request } from "express";
import helmet from "helmet";
import { port } from "../config";
import chalk from "chalk";

export default () =>
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        connectSrc: ["'self'"],
        frameSrc: ["'self'"],
        styleSrc: [
          "'self'",
          "https://stackpath.bootstrapcdn.com",
          "https://fonts.googleapis.com",
          "https://cdnjs.cloudflare.com",
          "'unsafe-inline'",
        ],
        scriptSrc: ["'self'", "https://cdn.jsdelivr.net", "https://unpkg.com"],
        imgSrc: [
          "'self'",
          "https://miro.medium.com/v2/resize:fit:700/0*IF5Z05nkdvA3JDXI.png",
          "https://upload.wikimedia.org",
          "https://avatars.githubusercontent.com",
          "https://raw.githubusercontent.com",
          "https://github.githubassets.com",
          "https://docs.amplify.aws/assets/logo-dark.svg",
          "https://www.vectorlogo.zone",
          "https://cdn.worldvectorlogo.com",
          "https://reactnative.dev/img/header_logo.svg",
        ],
      },
    },
    frameguard: {
      action: "deny",
    },
    noSniff: true,
  });

export const httpLogger = (req: Request, res: Response, next: NextFunction) => {
  const statusColor = res.statusCode >= 400 ? chalk.red : chalk.green;

  const startHrTime = process.hrtime();
  const ipAddr =
    req.headers["x-forwarded-for"] || req.connection?.remoteAddress;

  res.on("finish", () => {
    const elapsedHrTime = process.hrtime(startHrTime);
    const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
    console.log(
      `${ipAddr} - ${chalk.blue(req.method)} ${chalk.cyan(
        req.url
      )} [${statusColor(res.statusCode)}] - ${chalk.yellow(
        elapsedTimeInMs.toFixed(3)
      )} ms`
    );
  });
  next();
};

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
