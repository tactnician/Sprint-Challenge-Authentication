const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);
const dbConfig = require('../database/dbConfig');

const configureRoutes = require('../config/routes.js');

const server = express();

sessionConfig = {
    name: 'cookieID',
    secret: process.env.SECRET || "monkey-pants",
    cookie: {
        maxAge: 1000*60*60,
        secure: false,
        httpOnly: true
    },
    resave: false,
    saveUninitialized: false,
    store: new KnexSessionStore({
        knex: dbConfig,
        tablename: 'sessions',
        sidfieldname: 'sid',
        createtable: true,
        clearInterval: 1000 * 60 *10
    })
}


server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session(sessionConfig))

configureRoutes(server);

module.exports = server;
