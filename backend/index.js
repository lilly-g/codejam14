const express = require("express");
const cors = require('cors');

const PORT = 8080;

const app = express();

app.use(cors());
/*
app.get("/",(req,res) =>{
    res.json({message: "Hello World!"});
});
*/

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});