import dotenv from "dotenv";
dotenv.config();
import express from "express";
import Habitsrouter from "./src/routes/Habitsrouter.js";
import ConnectToDb from "./src/config/db/connectToDatabase.js";
import logger from "./src/middlewares/methods-logger.js";
import errorhandler from "./src/middlewares/errorhandling.js";
import authRouter from "./src/routes/authRouter.js";
import checkAuth from "./src/middlewares/checkAuth.js";


const port = process.env.PORT || 4000;

ConnectToDb();
const server = express();

server.use(logger);
server.use(express.json());

server.use("/api/v1/auth" , authRouter);

server.use(checkAuth);

server.use ("/api/v1/habits" , Habitsrouter);

server.use(errorhandler)
server.listen(port, () => {
  console.log(`The Server is running on Port ${port}`);
});
