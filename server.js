import express from "express";
import path from "path";
import posts from "./routes/posts.js";
import products from "./routes/products.route.js";
import logger from "./middlewares/logger.js";
import errorHandler from "./middlewares/error.js";
import { fileURLToPath } from "url";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 5050;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// function start_server() {
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);
app.use("/api/posts", posts);
app.use("/api/products", products);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

mongoose
  .connect(
    "mongodb+srv://tclinnchu:4qrGX6vgrx94Avqw@backenddb.ampnpow.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connect to database");
    app.listen(port, () => console.log(`Server is listening at ${port}..`));
  })
  .catch(() => {
    console.log("Conection is failed!");
  });

