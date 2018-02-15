
const express=require('express');
const bodyparser= require ('body-parser');
const path= require('path');
const http=require ('http');
const app=express();
//API file for interacting with monogo db
const api=require('./server/router/api');
//parsers
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
//Angular DIST output folder
app.use(express.static(path.join(__dirname,'dist')));

//API location
app.use('/api',api);

//send all other requests to the Angular APP

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./dist/index.html'));
});
//set port
const port=process.env.PORT || '3000';
app.set('port',port);

const server=http.createServer(app);
server.listen(port,() => 
console.log(`Running on localhost:${port}`));
//module.exports = Server;
