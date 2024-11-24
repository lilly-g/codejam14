const express = require("express");
const outingRouter = express.Router();

const outingController = require("../controllers/outingController");
const acceptingController = require("../controllers/acceptingController");

// define routes for requests to different endpoints
outingRouter.post('/new', outingController.createNewOuting);

outingRouter.post('/join', outingController.userJoin);

outingRouter.post('/login', outingController.login);

outingRouter.post('/search', acceptingController.findAmenities);

module.exports = outingRouter;