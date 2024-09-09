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
  res.render("index");
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
