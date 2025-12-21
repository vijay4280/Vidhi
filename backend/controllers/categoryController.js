const Category = require("../models/Category");


exports.createCategory = async (req, res) => {
const category = await Category.create({
name: req.body.name,
description: req.body.description,
image: req.file?.path
});
res.json(category);
};


exports.getCategories = async (req, res) => {
res.json(await Category.find());
};


exports.deleteCategory = async (req, res) => {
await Category.findByIdAndDelete(req.params.id);
res.json({ message: "Category removed" });
};