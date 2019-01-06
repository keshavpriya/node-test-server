const expect = require('expect');
const request = require('supertest');

const {app} = require('../server');

var {Todo} = require('../model/todo');
var {Users} = require('../model/user');


beforeEach((done)=>{
    Todo.deleteOne({}).then(()=>done());
});

describe('Test /todo post', () => {
    it('Should create a new Todos', (done) => {
        var text = 'Hi testing todos';
        request(app)
            .post('/todos')
            .send({text})
            .expect(200).expect((res) => {
            expect(res.body.text).toBe(text);
        })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                Todo.find({}).then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((e) => done(e));
            })
    })
});

