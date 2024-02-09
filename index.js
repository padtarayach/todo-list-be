import express from "express";
import dotenv from "dotenv";
import { connectToDatabase } from "./connectToDb.js";


// create variable for use express

const app = express();
dotenv.config();

const port = 3000;



app.listen(port, () => {
  connectToDatabase();
  console.log("Server Start");
});
