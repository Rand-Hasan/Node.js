const mongoose= require("mongoose");
const Schema = mongoose.Schema
const articalschema= new Schema({
    title: String,
    body:String,
    number : Number
})
const Article = mongoose.model("Article",articalschema)
module.exports= Article