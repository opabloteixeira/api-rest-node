const express = require('express');

//express é um micro framework pra node
const app = express();

app.get('/', (req, res) => {
    return res.send("Hello World");
});


app.listen(3000, () =>{
    console.log('Server started on port 3000');
});