require("dotenv").config();
const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");
const app = express();
const port = process.env.PORT || 8888;
// config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data
//config template engine
configViewEngine(app);

//khai báo route
app.use("/", webRouter);
app.listen(port);
