// const express = require("express");
import express from "express"
import 'dotenv/config'

const app = express();
const PORT = process.env.PORT ||8080;

// config views engine
app.set('view engine', 'ejs')
app.set('views', 'src/views')

app.get("/", (req, res) => {
  res.render("homePage");
});
app.get("/user", (req, res) => {
  res.send("Hello To Duc");
});

app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
  console.log(process.env.PORT)
});
