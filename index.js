require("dotenv").config();   

const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');

const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Use MONGO_URI from .env
const uri = process.env.MONGO_URI;

// MongoDB Client
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // await client.connect();

    const db = client.db("utilityBillManagement");
    const bills = db.collection("bills");
    const myBills = db.collection("myBills");

    // 1️⃣ CREATE Bill
    app.post("/bills", async (req, res) => {
      const result = await bills.insertOne(req.body);
      res.send(result);
    });

    // 2️⃣ READ All Bills + Category Filter
    app.get("/bills", async (req, res) => {
      const filter = {};
      if (req.query.category) {
        filter.category = req.query.category;
      }
      const limit = parseInt(req.query.limit) || 0;
      const result = await bills.find(filter).limit(limit).toArray();
      res.send(result);
    });

    // 3️⃣ READ Single Bill
    app.get("/bills/:id", async (req, res) => {
      const id = req.params.id;
      const result = await bills.findOne({ _id: new ObjectId(id) });
      res.send(result);
    });

    // 4️⃣ CREATE Paid Bill
    app.post("/myBills", async (req, res) => {
      const result = await myBills.insertOne(req.body);
      res.send(result);
    });

    // 5️⃣ READ Paid Bills (Logged-in User)
    app.get("/myBills", async (req, res) => {
      const email = req.query.email;
      const result = await myBills.find({ email }).toArray();
      res.send(result);
    });

    // 6️⃣ UPDATE Paid Bill
    app.put("/myBills/:id", async (req, res) => {
      const id = req.params.id;
      const result = await myBills.updateOne(
        { _id: new ObjectId(id) },
        { $set: req.body }
      );
      res.send(result);
    });

    // 7️⃣ DELETE Paid Bill
    app.delete("/myBills/:id", async (req, res) => {
      const id = req.params.id;
      const result = await myBills.deleteOne({ _id: new ObjectId(id) });
      res.send(result);
    });

    console.log("MongoDB Connected Successfully!");
  } catch (error) {
    console.error(error);
  }
}
run();

app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
