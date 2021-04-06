const express = require('express');
const Joi = require('joi'); //used for validation
const app = express();
app.use(express.json());

const setlistfmAPI= require('./api/setlistfm');
const nasaAPI= require('./api/nasa');
const giphyAPI= require('./api/giphy');
 
//READ Request Handlers
app.get('/', (req, res) => {
res.send('Have fun playing with REST APIs!');
});
 
app.get('/api/setlistfm/search/artists/:artistName', (req,res)=> {
    res.set('Access-Control-Allow-Origin', '*');
    const asyncAPICall = async () => {
        const response = await setlistfmAPI.searchArtists(req.params.artistName);
        res.send(response.data);
    };
    asyncAPICall();
});

app.get('/api/setlistfm/search/setlists/:mbid', (req,res)=> {
    res.set('Access-Control-Allow-Origin', '*');
    const asyncAPICall = async () => {
        const response = await setlistfmAPI.getSetlists(req.params.mbid);
        res.send(response.data);
    };
    asyncAPICall();
});

app.get('/api/nasa/pod', (req,res)=> {
    res.set('Access-Control-Allow-Origin', '*');
    const asyncAPICall = async () => {
        const response = await nasaAPI.getPOD();
        res.send(response.data);
    };
    asyncAPICall();
});

app.get('/api/nasa/notif', (req,res)=> {
    res.set('Access-Control-Allow-Origin', '*');
    const asyncAPICall = async () => {
        const response = await nasaAPI.getNOTIF();
        res.send(response.data);
    };
    asyncAPICall();
});

app.get('/api/nasa/earth', (req,res)=> {
    res.set('Access-Control-Allow-Origin', '*');
    const asyncAPICall = async () => {
        const response = await nasaAPI.getEARTH();
        res.send(response.data);
    };
    asyncAPICall();
});

app.get('/api/giphy/randomGIF', (req,res)=> {
    res.set('Access-Control-Allow-Origin', '*');
    const asyncAPICall = async () => {
        const response = await giphyAPI.getRandomGif();
        res.send(response.data);
    };
    asyncAPICall();
});

app.get('/api/giphy/randomSticker', (req,res)=> {
    res.set('Access-Control-Allow-Origin', '*');
    const asyncAPICall = async () => {
        const response = await giphyAPI.getRandomSticker();
        res.send(response.data);
    };
    asyncAPICall();
});
 
/* //CREATE Request Handler
app.post('/api/books', (req, res)=> {
 
const { error } = validateBook(req.body);
if (error){
res.status(400).send(error.details[0].message)
return;
}
const book = {
id: books.length + 1,
title: req.body.title
};
books.push(book);
res.send(book);
});
 
//UPDATE Request Handler
app.put('/api/books/:id', (req, res) => {
const book = books.find(c=> c.id === parseInt(req.params.id));
if (!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Not Found!! </h2>');
 
const { error } = validateBook(req.body);
if (error){
res.status(400).send(error.details[0].message);
return;
}
 
book.title = req.body.title;
res.send(book);
});
 
//DELETE Request Handler
app.delete('/api/books/:id', (req, res) => {
 
const book = books.find( c=> c.id === parseInt(req.params.id));
if(!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;"> Not Found!! </h2>');
 
const index = books.indexOf(book);
books.splice(index,1);
 
res.send(book);
});
 
function validateBook(book) {
const schema = {
title: Joi.string().min(3).required()
};
return true; //Joi.validate(book, schema);
 
} */
 
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));