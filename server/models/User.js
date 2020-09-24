var mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

var User = new mongoose.Schema({
    id: String,
    username: { type: String, unique: true, required: true },
});

User.plugin(mongoosePaginate);

module.exports = mongoose.model("User", User);
