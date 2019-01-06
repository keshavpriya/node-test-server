const {MongoClient,ObjectID} = require('mongodb');


const url="mongodb://localhost:27017";
const dbName="todos";
MongoClient.connect(url,(err,client)=>{
    if(err){
        return console.log('Unable to connect to database'+err);
    }
    const db=client.db(dbName);
     db.collection('users').insertOne({
         name:'ram',
         age:32,
         address:'delhi india'
     }).then((results)=>{
     return console.log(JSON.stringify(results.ops,undefined,2));
     },(err)=>{
     return    console.log('Unable to insert data'+err);
     })

});