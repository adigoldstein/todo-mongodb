const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db) => {

  if (err) {
    return console.info('Unable to connect MangoDB server. Error:', err);
  }

    // db.collection('Todos').findOneAndUpdate({_id: ObjectID('599005764c19a72b266e294c')},
    //   { $set: {completed: false}},
    //   { retturnOriginal: false}
    //   ).then((res)=> {
    // console.info(res);
    // })


  db.collection('Users').findOneAndUpdate({_id: ObjectID("599009e9e2459d28b0696b7d")},
    { $set: {name: "Bat-Chen"}, $inc: {age: -20}},
    {returnOriginal:false}
  ).then((res)=> {
    console.info(res);
  })

  // db.close();
});