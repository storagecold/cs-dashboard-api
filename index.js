const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
const routes = require('./routes/routes.js')

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/csapi', routes);

app.listen(3001, () => {
    console.log("Running on  Port 3001");
});

