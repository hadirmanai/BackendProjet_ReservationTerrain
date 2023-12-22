const express = require("express");
const req = require("express/lib/request");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
require("dotenv").config({ path: "./config/.env" });
const mongoose = require("mongoose");
var cors = require('cors');

const connectDB = require("./Config/db.js");
// load config
dotenv.config({ path: "./config/db.js" });
connectDB();

// parse application/json
app.use(bodyParser.json());
app.use(cors());


app.use("/api/user", require("./Routes/UserRoutes.js"));
app.use("/api/Service", require("./Routes/ServiceRoutes.js"));
app.use("/api/contact", require("./Routes/ContactRoutes.js"));
app.use("/api/contactClient", require("./Routes/ClientRoutes.js"));
app.use("/api/reservation", require("./Routes/ReservationRoutes.js"));
app.use("/api/terrain", require("./Routes/TerrainRoutes.js"));


//server

app.listen(7000, () => {
  console.log("listing on port 7000");
});
