const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

//middlewares
app.use(cors());
app.use(express.json());

//MongoDb CRUD Setup 

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster1.bhuozyz.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const run = async () => {
    try {
        const serviceCollection = client.db('carDoc').collection('services');

        app.get('/services', async (req, res) => {
            const query = {};
            const cursor = serviceCollection.find(query);
            const services = await cursor.toArray();
            res.send(services);
        });

    }

    finally {

    }

}
run().catch((error) => console.error(error));



app.get('/', (req, res) => {
    res.send('car doc  running at http://localhost:4000')
});

app.listen(port, () => {
    console.log('listening on port ' + port);
});