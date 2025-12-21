const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
name: { type: String, required: true },
category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
subCategory: String,
description: String,
specifications: Object,
images: [String],
createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model("Product", productSchema);