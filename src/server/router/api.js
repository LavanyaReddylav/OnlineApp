const express= require('express');
const router=express.Router();
const MongoClient=require('mongodb').MongoClient;
const objectID=require('mongodb').objectID;
//connect
const connection=(closure)=>
{
    return MongoClient.connect
('mongodb://localhost:27017/UserDetails',(err,db)=>{
    if(err) return console.log(err);
    closure(db);
});
};
//Error handling
const sendError=(err,res)=>{
    response.status=501;
    response.message=typeof err=='object' ? err.message:err;
    res.status(501).json(response);
};
//Response handling
let response={
    status:200,
    data:[],
    message:null

};
router.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers",
 "Origin,X-Requested-with,Content-Type,Accept");
 next();
})
//Get Users
router.get('/data',(req,res)=>{
    connection((db1)=>{
        db1.db('UserDetails').collection('User')
        .find()
        .toArray()
        .then((items)=>{
         response.data=items;
         res.json(response);
        })
        .catch((err)=>{
            console.log(err);
            sendError(err,res);
        })
    });
});
module.exports=router;