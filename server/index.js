const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.send('This is nahid');
})

app.listen(5000, ()=>{
    console.log('Server is running at http://localhost:5000');
})
