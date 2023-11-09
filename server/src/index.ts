import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { config } from "dotenv";

config();

import { env } from "./utils";
import { connectDb } from "./configs";
import { instagramRoutes } from "./routes";

const app = express();

app.use(
    cors({
        credentials: true,
    })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(env.PORT, async () => {
    const isConnected = await connectDb(env.MONGODB_URI);

    if (isConnected) {
        console.log("Server listening on port " + env.PORT);
        instagramRoutes(app);
    }
});
