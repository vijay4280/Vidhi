const mongoose = require("mongoose");


const sectionSchema = new mongoose.Schema({
title: String,
content: String,
image: String
});


const pageSchema = new mongoose.Schema({
pageName: { type: String, required: true, unique: true },
sections: [sectionSchema]
});


module.exports = mongoose.model("Page", pageSchema);