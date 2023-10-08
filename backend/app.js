const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const errorMiddleware = require("./middlewares/error");

app.use(express.json());
//check for cookie
app.use(cookieParser());

//import all the routes
const auth = require("./routes/auth");
const category = require("./routes/category");

/**define routes */
app.use("/api/v1", auth);
app.use("/api/v1", category);

//Middleware to handle error
app.use(errorMiddleware);

module.exports = app;
