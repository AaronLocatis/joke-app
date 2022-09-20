//! Attach everything in .env to process.env
require("dotenv").config();

const favoritesRoutes = require("./server/routes/favorites.routes");
const passport = require("./server/config/passport.config");
const cookieParser = require("cookie-parser");

//! importing express
const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.enable("trust proxy");
app.use((req, res, next) => {
  req.secure ? next() : res.redirect("https://" + req.headers.host + req.url);
});

app.use(express.json());

app.use(passport.initialize());

app.use(express.static(__dirname + "/build"));

app.use("/api/favorites", favoritesRoutes);

app.get("*", (req, res) => {
  return res.sendFile("/build/index.html", { root: __dirname + "/" });
});

app.listen(PORT, () => console.log("Server is up and running!"));
