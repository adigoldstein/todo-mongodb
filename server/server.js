const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

// Bring our mongoose config
// var moongose = require('./db/mongoose').mongoose;
var {moongose} = require('./db/mongoose');
var {User} = require('./models/user');
var {Todo} = require('./models/todo');


const app = express();


// set middleware
app.use(bodyParser.json());

app.post('/todos', (req, res) => {

  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req,res)=> {
  Todo.find().then((todos)=> {
    res.send({todos})
  }, (e)=> {
    res.status(400).send(e);
  })
});

app.get('/todos/:id', (req,res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)) {
    res.status(404).send();
  }
  Todo.findById(id).then((todo)=> {
    if(!todo) {
      return res.status(404).send()
    }
    res.send({todo})
  }).catch((e)=> res.status(400).send())
  // res.send(req.params)
});

app.delete('/todos/:id', (req,res)=> {

  var id= req.params.id;

  if(!ObjectID.isValid(id)) {
    res.status(404).send();
  }
  Todo.findByIdAndRemove(id).then((doc)=> {
    if(!doc) {
      return res.status(400).send()
    }
    res.send(doc)
  }).catch((e)=> res.status(400).send())

});

app.listen(3000, () => {
  console.info('Started on port 3000');
});


//Export app to test it..
module.exports = {app};




