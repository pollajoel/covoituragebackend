"use strict";

const moongose = require("mongoose");
const  config = require("../configs");
const uri = config.database.url;

module.exports.dbConnect = function () {
  moongose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }).then(function () {
    console.log("Connection Success..");
  })["catch"](function (error) {
    console.log(error);
    process.exit(1);
  });
};