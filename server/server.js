const {mongoose} = require('./db/mongoose-connect');
const {ObjectId} = require('mongodb');
var {Todo} = require('./model/todo');
var {User} = require('./model/user');

const express = require('express');
const bodyParser = require('body-parser');


var app = express();

var port=process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    console.log(req.body);
    var newTodo = new Todo({
        text: req.body.text
    });
    newTodo.save().then((result) => {
        res.send(result);
    }, (error) => {
        res.send(error);
    })
});

app.get('/getTodos', (req, res) => {

    Todo.find({}).then((results) => {
        return res.status(200).send({results});
    }, (error) => {
        return res.status(400).send({error});
    })
});

app.get('/getTodo/:id', (req, res) => {
    let id = req.params.id;

    if(!ObjectId.isValid(id)){
        return res.status(400).send('Not a Valid Id');
    }
    Todo.findById(id).then((result) => {
        if (!result) {
            res.send('No Id Found')
        }
        res.status(200).send({result});
    }, (error) => {
        res.status(400).send({error});
    }).catch((e) => e);

});

app.listen(port, () => {
    console.log(`server started listen on port ${port}`);
});

module.exports = {app};