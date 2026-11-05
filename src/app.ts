// const express = require("express");
import express from "express";
import "dotenv/config";
import webRoutes from "./routes/path";

const app = express();
const PORT = process.env.PORT || 8080;

// config views engine
app.set("view engine", "ejs");
app.set("views", __dirname+"/views");
//config req body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//config static file image/js/css
app.use(express.static("public"));

// config router
webRoutes(app);
app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
});
