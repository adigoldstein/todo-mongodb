const {mongoose} = require('./../server/db/mongoose');
const {ObjectID} = require('mongodb');

const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// //if you want to remove everything, pass an empty obj!
// Todo.remove({}).then((result)=> {
// console.info(result);
// });
//
Todo.findOneAndRemove({_id : '59993f884cf6f136b0d71e27'}).then((todo)=> {
  console.info(todo);
});

Todo.findByIdAndRemove('59993f884cf6f136b0d71e27').then((todo)=> {
console.info(todo);
});