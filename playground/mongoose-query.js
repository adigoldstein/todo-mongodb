const {mongoose} = require('./../server/db/mongoose');
const {ObjectID} = require('mongodb');

const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

const id = '59916f85c5ed7717e426ba01';

// if(!ObjectID.isValid(id)) {
//   console.info('id not valid');
// }

// // Return array of objects
// Todo.find({
//   _id: id
// }).then((todos)=> {
//   console.info('Todos: ' , todos);
// });
//
//
// //return only one object
// Todo.findOne({
//   _id: id
// }).then((todos)=> {
//   console.info('Todo: ' , todos);
// });

// Todo.findById(id).then((todo)=> {
//
//   if(!todo) {
//     return console.info('Id not found');
//   }
//   console.info('Todo by id: ' , todo);
// }).catch((e)=> console.info(e));


if(!ObjectID.isValid(id)) {
  console.info('id not valid');
}
User.findById(id).then((user)=> {
  if(!user) {
    return console.info('Cant find this user');
  }
  
  console.info('user found:' , user);
}).catch((e)=> console.info(e)); 