import express from "express";
import ReactDOM from "react-dom/server";
import {App} from "../app";
import {indexTemplate} from "./indexTemplate";
import axios from "axios";
import {REDIRECT_URI} from "../constants";
import compression from "compression";
import helmet from "helmet";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(compression());
app.use(helmet({
  contentSecurityPolicy: false
}));
app.use("/static", express.static("./dist/client"))

app.get("/auth", (req, res) => {
  console.log("process", process);
  axios.post(
    "https://www.reddit.com/api/v1/access_token",
    `grant_type=authorization_code&code=${req.query.code}&redirect_uri=${REDIRECT_URI}`,
    {
      auth: {
        username: process.env.CLIENT_ID,
        password: process.env.SECRET,
      },
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      }
    }
  ).then(({data}) => {
    res.send(
      indexTemplate(ReactDOM.renderToString(App()), data["access_token"]),
    )
  }).catch(e => console.log(e))
})

app.get("*", (req, res) => {
  res.send(
    indexTemplate(ReactDOM.renderToString(App())),
  )
})

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
})