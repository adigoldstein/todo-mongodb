const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');


const todos = [
  {_id: new ObjectID,
  text: 'YES YES YES'},
  {_id: new ObjectID,
    text: 'TestS'}
];

beforeEach((done) => {
  Todo.remove({}).then(() => done());
});

describe('POST/todos', () => {

  it('Should create new todo', (done) => {
    var text = 'Test todo';

    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text)
      })
      .end((err, res) => {
        if (err) {
          return done(err)
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e))
      })
  });

  it('Should not create todo with invalid body data', (done) => {

    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(0);
          done();
        }).catch((e) => done(e))
      })
  });

});

describe('GET /todos/:id', ()=> {

  it('should rerurn todo doc',(done)=> {

    request(app)
      .get(`/todos/${todos[0]._id.toHexString()}`)
      .expect(200)
      .expect((res)=> {
       expect(res.body.todo.text).toBe(todos[0].text)
      })
      .end(done);

  })

});