import express, { Application } from "express";
import cors from "cors";
import { router } from "./routes/index";
import { database } from "./database/connection";

const app: Application = express();

const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.static("submissions"));

app.use("/api", router);

try {
  database.authenticate();
  database.sync().then(() => {
    console.log("Database connection successfull.");
    app.listen(port, (): void => {
      console.log(`Server started on port: ${port}`);
    });
  });
} catch (error) {
  console.log("Unable to connect to the database.");
}
