const express = require("express");
const outingRouter = express.Router();

const outingController = require("../controllers/outingController");

// define routes for requests to different endpoints
outingRouter.post('/new', outingController.createNewOuting);

outingRouter.post('/join', outingController.userJoin);

outingRouter.post('/login', outingController.login);

module.exports = outingRouter;