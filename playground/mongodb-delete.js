const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db) => {

  if (err) {
    return console.info('Unable to connect MangoDB server. Error:', err);
  }

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=> {
  //   console.info(result);
  // })
  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result)=> {
  //   console.info(result);
  // })

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=> {
  //   console.info(result);
  // })


  db.collection('Users').deleteMany({name: 'Adi Goldstein'}).then((res)=> {
    console.info(res);
  })
  // db.collection('Users').findOneAndDelete({ "_id" : ObjectID("599009e4d31a3f2da459e092")}).then((res)=> {
  //   console.info(res);
  // })

  // db.close();
});