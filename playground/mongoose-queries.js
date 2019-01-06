const mongoose = require('mongoose');
const {ObjectID} = require('mongodb');

const {Users} = require('../server/model/user');
const {Todo} = require('../server/model/todo');
const db = require('../server/db/mongoose-connect');

const id = "6c30ed7d1c6acd0a201c1dd24449";

if(ObjectID.isValid(id)){
    console.log('Valid ID ');
}

// Todo.find({
//     _id:id
// }).then((results)=>{
//    console.log(results);
// },(error)=>{
//     console.log(error);
// });
//
//
// Todo.findOne({_id:id}).then((results)=>{
//     console.log(results);
// },(error)=>{
//     console.log(error);
// });


Todo.findById(id).then((results) => {
    if (!results) {
        return console.log('id not found');
    }
    console.log(results);
}, (error) => {
    console.log(error);
}).catch((e) => console.log(e));
