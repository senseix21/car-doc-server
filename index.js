const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

//middlewares
app.use(cors());
app.use(express.json());

//

const uri = `mongodb+srv://${process.env.DB_User}:${process.env.DB_password}@cluster1.bhuozyz.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



app.get('/', (req, res) => {
    res.send('car doc port running at http://localhost:4000')
});

app.listen(port, () => {
    console.log('listening on port ' + port);
});