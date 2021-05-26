"use strict";
const config = require("../configs");
const PORT = process.env.PORT || config.server.Port;
const express = require("express");
const app = express();
const schema = require("../appolo/schema");

const  resolvers = require("../appolo/resolvers");
const bodyParser = require('body-parser');
const apiRouter = require("../routes"); //import apiRouter from "../routes"
//var cors = require('cors');


const _require = require('apollo-server-express'),
    ApolloServer = _require.ApolloServer,
    gql = _require.gql;

const graphQlServer = new ApolloServer({
  typeDefs: schema,
  resolvers: resolvers
});
graphQlServer.applyMiddleware({
  app: app,
  path: "/graphql"
});
app.use(bodyParser.json());
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument));
app.use('/api/v1', apiRouter); //app.use(cors());

module.exports.start = function () {
  app.listen(PORT, function (err) {
    console.warn("Serveur Listen on port ".concat(PORT));
  });
};