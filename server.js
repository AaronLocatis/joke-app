//! Attach everything in .env to process.env
require("dotenv").config();

const favoritesRoutes = require("./server/routes/favorites.routes");
const passport = require("./server/config/passport.config");
const cookieParser = require("cookie-parser");


//! importing express
const express = require("express");

//! creating the app (express server)
const app = express();

//! declaring the port the server will run on
const PORT = process.env.PORT || 8080

app.enable("trust proxy");
app.use((req, res, next) => {
    req.secure ? next() : res.redirect("https://" + req.headers.host + req.url);
});

//! needed to handle JSON data being sent via POST/PUT/PATCH
app.use(express.json());


app.use(passport.initialize());
//! Allowing static files like .html, .css etc to be given from the backend to the frontend
app.use(express.static(__dirname + "/build"));

//! Using the separate routes files in the server
app.use("/api/favorites", favoritesRoutes);


//! IF they make any request to a route not declared, send them the main react .html file
//! This makes sure the React Routing takes precedence
app.get("*", (req, res) => {
    return res.sendFile("/build/index.html", { root: __dirname + "/" });
});

app.listen(PORT, () => console.log("Server is up and running!"));
