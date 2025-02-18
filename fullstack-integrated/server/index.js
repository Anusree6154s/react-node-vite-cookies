const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();

app.use(cookieParser());
app.use(express.json());

const secret_key = "secret";

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.post("/api/login", (req, res) => {
  const { username, email } = req.body;
  const token = jwt.sign({ username, email }, secret_key, { expiresIn: "1h" });
  res.cookie("jwt", token).status(200).send({ message: "cookie set" });
});

app.post("/api/check-auth", (req, res) => {
  const token = req.cookies.jwt;
  const decoded = jwt.verify(token, secret_key);
  res.status(200).send(decoded.username);
});

app.get("/api/logout", (req, res) => {
  res.clearCookie("jwt").status(200).send({ message: "cookie cleared" });
});

app.listen(8000, () => {
  console.log("server is listening at port 8000");
});

module.exports = app;
export const config = { maxDuration: 30 };