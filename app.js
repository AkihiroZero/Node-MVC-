const express = require('express');
const models  = require('./models');
const port = 5000;

const app = express();
app.use(express.json());

app.get('/', async (req,res,next)=>{
    const user = await models.Video.findAll()
    console.log(user);
    res.json(user);
})

app.get('/channel', async (req,res,next)=>{
    const user = await models.Channel.findAll()
    console.log(user);
    res.json(user);
})

app.get('/user', async (req,res,next)=>{
    const user = await models.User.findAll()
    console.log(user);
    res.json(user);
})

app.listen(port,()=> console.log(`Server running on http://localhost:${port}`));