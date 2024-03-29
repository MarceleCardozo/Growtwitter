import express, { Request, Response } from "express";
import { userRoutes } from "./routes/user.routes";
import { tweetRoutes } from "./routes/tweet.routes";
import { authRoutes } from "./routes/auth.routes";
import { likeRoutes } from "./routes/like.routes";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", userRoutes());
app.use("/auth", authRoutes());
app.use("/tweets", tweetRoutes());
app.use("/likes", likeRoutes());

app.listen(3333, () => {
  console.log("API is Running");
});
