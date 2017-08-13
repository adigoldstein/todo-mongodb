const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db) => {

  if (err) {
    return console.info('Unable to connect MangoDB server. Error:', err);
  }

  console.info('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('599005764c19a72b266e294c')
  // }).toArray().then((docs) => {
  //   console.info('Todos');
  //   console.info(JSON.stringify(docs, undefined,2));
  // }, (err) => {
  //   console.info(err);
  // });
  //
  // db.collection('Todos').find().count().then((count)=> {
  //   console.info(`count is: ${count}` );
  // }, (err)=> {
  //   console.info(err);
  // });

  db.collection('Users').find({ name: 'Adi Goldstein'}).toArray().then((docs)=> {
    console.info('Users:');
    console.info(JSON.stringify(docs,undefined,2));
  }, (err)=> {
    console.info(err);
  })

  // db.close();
});