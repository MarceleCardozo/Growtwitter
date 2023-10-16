import express, { Request, Response } from "express";
import { userRoutes } from "./routes/user.routes";
import { tweetRoutes } from "./routes/tweet.routes";
import { authRoutes } from "./routes/auth.routes";

const app = express();
app.use(express.json());

app.use("/users", userRoutes());
app.use("/auth", authRoutes());
app.use("/tweets", tweetRoutes());

app.listen(3333, () => {
  console.log("API is Running");
});
