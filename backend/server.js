const express=require("express");
const dotenv=require("dotenv");
const {chats} =require ("./data/data");
const cors=require('cors');
const app=express();
dotenv.config();

app.use(cors());
app.get('/', (req, res)=> {
    res.send("API has started Running");
});

app.get('/api/chat', (req,res) => {
    res.status(200).json(chats);
});

app.get('/api/chat/:id', (req,res) => {
    //console.log(req.params.id);
    const singleChat= chats.find((c)=> c._id === req.params.id);
    res.send(singleChat);
});

const PORT=process.env.PORT || 5000
app.listen(5000, console.log(`Server has Started on PORT ${PORT}`));
