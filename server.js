import express from "./node_modules/express";
import path from "./node_modules/path";
// import posts from "./routes/posts.js";
import products from "./routes/products.route.js";
import logger from "./middlewares/logger.js";
import errorHandler from "./middlewares/error.js";
// import { fileURLToPath } from "url";
import mongoose from "./node_modules/mongoose";

const app = express();
const port = process.env.PORT || 5050;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function start_server() {
  app.use(express.static(path.join(__dirname, "public")));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(logger);
  // app.use("/api/posts", posts);
  app.use("/api/products", products);
  app.use(errorHandler);

  mongoose
    .connect(
      "mongodb+srv://tclinnchu:4qrGX6vgrx94Avqw@backenddb.ampnpow.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
    )
    .then(() => {
      console.log("Connect to database");
      app.listen(port, () => console.log(`Server is listening at ${port}..`));
    })
    .catch(() => {
      console.log("Conection is failed!");
    });
}

var myButton = document.querySelector("button");
myButton.addEventListener("click", start_server());
