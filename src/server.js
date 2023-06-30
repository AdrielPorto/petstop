const express = require("express");
const path = require("path");
const {
    index,
    stop,
    stops,
    createStop,
    saveStop
} = require("./pages.js");

const server = express();
server
    .use(express.urlencoded({ extended: true }))
    .use(express.static("public"))
    .set("views", path.join(__dirname, "src/views"))
    .set("view engine", "hbs")
    .get("/", index)
    .get("/stop", stop)
    .get("/stops", stops)
    .get("/create-stop", createStop)
    .post("/save-stop", saveStop);

server.listen(5500);
