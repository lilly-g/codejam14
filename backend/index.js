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




const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://<username>:<password>@cluster0.63jdp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);




app.post('/new', (req, res) => {
    const formData = req.body;
    console.log(formData["new-admin-name"]);
    res.status(200).json({ "message": "success" });
});

app.post('/join', (req, res) => {
    const formData = req.body;
    res.status(200).json({ "message": "success" });
});

app.post('/login', (req, res) => {
    const formData = req.body;
    res.status(200).json({ "message": "success" });
});

app.get('/', (req, res) => {
    res.send("default");
});

app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}`);
});