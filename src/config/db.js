const mongoose = require("mongoose");

const mongodbUrl =
  "mongodb+srv://vinitaparab77:09sIBC3cXO0ehAhw@cluster0.oujbt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
async function connectDB() {
  return mongoose.connect(mongodbUrl);
}
module.exports = connectDB;
