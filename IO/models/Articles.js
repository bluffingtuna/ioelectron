var mongoose = require("mongoose");
let beautifyUnique = require('mongoose-beautiful-unique-validation');


var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title: {
        type: String,
        unique: true
    },
    url: String
}, { timestamps: true })

articleSchema.plugin(beautifyUnique);

var Article = mongoose.model("Article", articleSchema);

module.exports = Article;
