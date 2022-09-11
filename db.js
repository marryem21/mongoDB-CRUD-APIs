const { MongoClient } = require("mongodb");

let dbConnection;
let uri =
  "mongodb+srv://hammdimaryem:hammdimaryem@cluster0.6y1zz0d.mongodb.net/?retryWrites=true&w=majority";
module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(uri)
      .then((client) => {
        dbConnection = client.db();
        return cb();
      })
      .catch((err) => {
        console.log(err);
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};
