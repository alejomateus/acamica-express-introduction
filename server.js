const express = require('express');
const server = express();
server.get('/json',(req, res)=>{
    const json = {
        name: 'Alejandro',
        lastName: 'Jimenez'
    }
    res.json(json);
})
server.get('/error',(req, res)=>{
    res.statusCode = 500;
    res.json({error: 'I´m sorry'});
})
server.listen(3000,()=>{
    console.log(`Server on port 3000`);
});