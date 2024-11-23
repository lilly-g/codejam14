const express = require("express");
const app = express();

const cors = require('cors');
const BACKEND_PORT = 8080;
const FRONTEND_PORT = 3000;

const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

const outingRouter = require("./routes/outingRouter");

app.use(cors({ origin: `http://localhost:${FRONTEND_PORT}` }));
app.use(express.json());
app.use("/api", outingRouter);

// get url to connect to mongodb
const databaseURL = process.env.mongoURI;

// connect??
mongoose.connect(databaseURL, {
    dbName: "sociouts",
})
.then( () => {
    app.listen(BACKEND_PORT, () => {
      console.log(`Server started on port http://localhost:${BACKEND_PORT}`);
    });
})
.catch((error) => {
    console.log(error);
})

app.get('/', (req, res) => {
    res.send("default");
});
