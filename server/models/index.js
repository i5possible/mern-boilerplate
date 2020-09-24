const mongoose = require('mongoose')

mongoose.connect(process.env.MONGOOSE, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true });
mongoose.Promise = Promise;
module.exports.User = require("./User");