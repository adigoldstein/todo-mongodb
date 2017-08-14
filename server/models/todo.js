var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    require: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});



module.exports = {Todo};

//exapmle of adding new todo:
// var newTodo = new Todo({
//   text: '    Edit this file'
// });
//
//
// newTodo.save().then((doc)=> {
//   console.info('Todo saved!!' ,doc);
// }, (err)=> {
//   console.info('Error adding the new todo.....', err);
// })