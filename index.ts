import express, { Request, Response } from "express";
import csp, { onError, customHeaders } from "./src/middleware";
import http from "http";
import { debug } from "console";
import { port } from "./src/config";
import { join } from "path";
import { emailTempl, sendEmail } from "./src/utils";

const app = express();
const server = http.createServer(app);

server.on("error", onError);

server.on("listening", () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr?.port;
  debug("Listening on " + bind);
});
server.listen(Number(port), "0.0.0.0");

app.use(csp());
app.use(customHeaders());

app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, "public")));

app.post("/contact", (req: Request, res: Response) => {
  const { name, email, message } = req.body;
  sendEmail({
    subject: "Contact",
    html: emailTempl({ name, email, message }),
    receiver: "elijaheze777@gmail.com",
  });
  res.redirect("/?rT=form&ok=true");
});
