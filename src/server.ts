import { Subject } from "./models/Subject";
import express, { Application } from "express";
import cors from "cors";
import { router } from "./routes/index";
import { database } from "./database/connection";
import session from "express-session";
import SequelizeStore from "connect-session-sequelize";
import { User } from "./models/User";

const SessionStore = SequelizeStore(session.Store);

const app: Application = express();

const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);

const sessionStore = new SessionStore({
  db: database,
});

app.use(
  session({
    secret: "keyboard cat",
    store: sessionStore,
    resave: false,
    proxy: true,
  })
);

app.use("/api", router);

try {
  database.authenticate();
  sessionStore.sync();
  database.sync().then(() => {
    console.log("Database connection successfull.");
    app.listen(port, (): void => {
      console.log(`Server started on port: ${port}`);
    });
  });
} catch (error) {
  console.log("Unable to connect to the database.");
}
