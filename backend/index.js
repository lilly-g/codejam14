const express = require("express");
const cors = require('cors');

const PORT = 8080;

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

/*
app.get("/",(req,res) =>{
    res.json({message: "Hello World!"});
});
*/

app.post('/test', (req, res) => {
    const {a, b, c} = req.body; // Access the form data
    res.status(200).json({ message: a+b+c });
});

app.get('/', (req, res) => {
    res.send("default");
});

app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}`);
});