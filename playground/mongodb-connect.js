const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db) => {

  if (err) {
    return console.info('Unable to connect MangoDB server. Error:', err);
  }

  console.info('Connected to MongoDB server');


  // db.collection('Todos').insertOne({
  //   text: 'The first todo',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.info('Unable to inset todo', err);
  //   }
  //   console.info(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Adi Goldstein',
    age: 34,
    location: 'Israel'
  }, (err, result) => {
    if (err) {
      return console.info('Cannot insert this data. ', err);
    }

    console.info(JSON.stringify(result.ops, undefined, 2));
  })

  db.close();
});