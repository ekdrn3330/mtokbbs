const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port =process.env.PORT || 3001;
const api = require('./routes/index');

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(cors());

app.use('/', api);

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
});