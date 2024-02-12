import express from "express";
import dotenv from "dotenv";
import { connectToDatabase } from "./connectToDb.js";
import { todoRouter } from "./routes/todoRouter.js";
import cors from 'cors'


// create variable for use express

const app = express();
dotenv.config();

app.use(express.json())

app.use(cors())


const port = 3000;

app.use("/api/todos", todoRouter)



app.listen(port, () => {
  connectToDatabase();
  console.log("Server Start");
});
