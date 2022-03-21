const express =require("express");
const bodyParser = require('body-parser');
const app = express();
const { MongoClient } = require('mongodb');
const env =require("dotenv").config({ path: "/home/bitnami/apihide/.env"});

var uri = process.env.uri;
var urp = process.env.urp;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

module.exports = app;
