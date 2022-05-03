import express from 'express';
import mongoose from 'mongoose';
import { config } from './src/config';
import expressConfig from './src/infrastructure/webserver/express';
import { routes } from './src/infrastructure/webserver/routes';
import serverConfig from './src/infrastructure/webserver/server';
import mongoDbConnection from './src/infrastructure/database/connection';
// // middlewares
import { errorHandlingMiddleware } from './src/infrastructure/webserver/middlewares';

const app = express();
const server = require('http').createServer(app);

// express.js configuration (middlewares etc.)
expressConfig(app);

// server configuration and start
serverConfig(app, mongoose, server, config).startServer();

// DB configuration and connection create
mongoDbConnection(mongoose, config, {
  autoIndex: false,
  useNewUrlParser: true,
  keepAlive: true,
  connectTimeoutMS: 1000
}).connectToMongo();

// routes for each endpoint
routes(app, express);

// error handling middleware
app.use(errorHandlingMiddleware);

// Expose app
export default app;
