"use strict";

require('dotenv').config();

const apps = require("./services/server.service");
const mongoService = require("./services/mongoose.service");

mongoService.dbConnect();
apps.start();