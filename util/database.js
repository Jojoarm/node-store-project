// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

// let _db;

// const mongoConnect = (callback) => {
//   MongoClient.connect(
//     'mongodb+srv://admin-jojo:maryovie123@cluster0.uba8jui.mongodb.net/node-shop?retryWrites=true&w=majority'
//   )
//     .then((client) => {
//       console.log('Connected to db!');
//       _db = client.db();
//       callback();
//     })
//     .catch((err) => {
//       console.log(err);
//       throw err;
//     });
// };

// const getDb = () => {
//   if (_db) {
//     return _db;
//   }
//   throw 'No database found';
// };

// exports.mongoConnect = mongoConnect;
// exports.getDb = getDb;
