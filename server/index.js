require("dotenv").config();
const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

const cors = require("cors");

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.dibwnab.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



const run = async () => {
    try {
        const db = client.db("blogCollection");
        const blogCollection = db.collection("blogs");

        app.get("/blogs", async (req, res) => {
            const cursor = blogCollection.find({});
            const blog = await cursor.toArray();

            res.send({ status: true, data: blog });
        });

        app.post("/blog", async (req, res) => {
            const blog = req.body;
            // console.log(blog)
            // console.log(blog)
            const result = await blogCollection.insertOne(blog);

            res.send(result);
        });

        app.delete("/blog/:id", async (req, res) => {
            const id = req.params.id;

            const result = await blogCollection.deleteOne({ _id: ObjectId(id) });
            res.send(result);
        });
        app.patch("/blog/:id", async (req, res) => {
            const id = req.params.id;
            const filter = { _id: ObjectId(id) }
            const blog = req.body
            const updateDoc = {
                $set: blog,
            };
            const result = await blogCollection.updateOne(filter, updateDoc, { upsert: false });
            res.send(result);
        });
    } finally {
    }
};

run().catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("JavaScript Blog Server !!! Running ....s");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
