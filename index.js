const express = require('express');
require('dotenv').config()
const router=require('./routes/blog.js')
const app = express();
var cors = require("cors");
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(router);

app.listen(PORT, () => {
    console.log("server is listening on port ",PORT);
})