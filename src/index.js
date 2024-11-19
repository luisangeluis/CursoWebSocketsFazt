import app, { test } from "./app";
import {Server as WebsocketServer} from "socket.io";
import http from "http";
import path from "path";

const server = http.createServer(app);
const httpServer = server.listen(4000);
const io = new WebsocketServer(httpServer);


console.log("Server on port 4000");

