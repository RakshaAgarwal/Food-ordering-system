const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/index');

const app = express();
const port = 3005;

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true}));
app.use(bodyParser.json({limit: "50mb", extended: true}));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

routes(app);  

let dbUrl = "mongodb+srv://rakshaagarwal0307:Raksha%40123@cluster0.o3dvhkf.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection;

