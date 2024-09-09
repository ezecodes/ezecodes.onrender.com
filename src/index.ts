import express, { Request, Response } from "express";
import csp, { onError, customHeaders, httpLogger } from "./middleware";
import http from "http";
import { debug } from "console";
import { port } from "./config";
import { join } from "path";
import { deliverContactForm } from "./utils";
import { RequestBodyType } from "./types";

const app = express();
const server = http.createServer(app);

app.set("view engine", "ejs");
app.set("views", join(__dirname, "views"));
app.set("port", port);
app.use(csp());
app.use(customHeaders());
app.use(httpLogger);

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, "../public")));
app.get("/", (req: Request, res: Response) => {
  res.render("index", {
    skills: [
      {
        href: "https://aws.amazon.com",
        src: "/images/aws.svg",
        alt: "aws",
      },
      {
        href: "https://www.linux.org/",
        src: "/images/linux.svg",
        alt: "linux",
      },
      {
        href: "https://nodejs.org",
        src: "/images/nodejs.svg",
        alt: "nodejs",
      },
      {
        href: "https://www.docker.com/",
        src: "/images/docker.svg",
        alt: "docker",
      },
      {
        href: "https://expressjs.com",
        src: "/images/express.svg",
        alt: "express",
      },
      {
        href: "https://firebase.google.com/",
        src: "/images/firebase.svg",
        alt: "firebase",
      },
      {
        href: "https://www.gnu.org/software/bash/",
        src: "/images/bash.svg",
        alt: "bash",
      },
      {
        href: "https://www.jenkins.io",
        src: "/images/jenkins.svg",
        alt: "jenkins",
      },
      {
        href: "https://www.mongodb.com/",
        src: "/images/mongodb.svg",
        alt: "mongodb",
      },
      {
        href: "https://www.mysql.com/",
        src: "/images/mysql.svg",
        alt: "mysql",
      },
      {
        href: "https://nextjs.org/",
        src: "/images/nextjs.svg",
        alt: "nextjs",
      },
      {
        href: "https://www.nginx.com",
        src: "/images/nginx.svg",
        alt: "nginx",
      },
      {
        href: "https://www.postgresql.org",
        src: "/images/postgresql.svg",
        alt: "postgresql",
      },
      {
        href: "https://postman.com",
        src: "/images/postman.svg",
        alt: "postman",
      },
      {
        href: "https://reactjs.org/",
        src: "/images/react.svg",
        alt: "react",
      },
      {
        href: "https://reactnative.dev/",
        src: "/images/header_logo.svg",
        alt: "reactnative",
      },
      {
        href: "https://www.typescriptlang.org/",
        src: "/images/typescript/typescript.svg",
        alt: "typescript",
      },
      {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        src: "/images/javascript.svg",
        alt: "javascript",
      },
    ],
    projects: [
      {
        title: "Clifbay",
        description: "One of Africa's fastest growing online marketplace.",
        image: "clifbay.png",
        link: "https://clifbay.com",
      },
      {
        title: "AWS Cloud IAC",
        description: "Simplifying cloud deployment process.",
        image:
          "https://miro.medium.com/v2/resize:fit:700/0*IF5Z05nkdvA3JDXI.png",
        link: "https://github.com/ezecodes/aws-services",
      },
    ],
  });
});

app.post("/contact", (req: Request<{}, {}, RequestBodyType>, res: Response) => {
  const { name, email, message } = req.body;
  deliverContactForm({ name, email, message });
  res.status(200).json({
    success: true,
    message:
      "Thank you for your interest in my services. I will review your message and get back to you as soon as possible.",
  });
});

server.on("error", onError);

server.on("listening", () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr?.port;
  debug("Listening on " + bind);
});
server.listen(port as number, "0.0.0.0");
