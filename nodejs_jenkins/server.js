const express = require('express');
const app = express();
const Port  = process.env.PORT || 5000
app.get('/', (req, res) => {
    res.send("Hello, world!");
})


app.listen(Port, () => {
    console.log("server running");
})