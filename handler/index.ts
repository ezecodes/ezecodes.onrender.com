import express from "express"
import csp, { onError, serverHeaders } from "./middleware";
import http from "http"
import { debug } from "console";
import { port } from "./config";
import { join } from "path";

const app = express();
const server = http.createServer(app);

app.use(csp())

app.use("/public", express.static("public"))
app.use(express.static(join(__dirname, 'public')));

server.on("error", onError);

server.on("listening", () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr?.port;
  debug("Listening on " + bind);
});
server.listen(Number(port), "0.0.0.0");
