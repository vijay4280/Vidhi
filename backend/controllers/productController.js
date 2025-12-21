const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  const product = await Product.create({
    name: req.body.name,
    category: req.body.category,
    subCategory: req.body.subCategory,
    description: req.body.description,
    specifications: req.body.specifications,
    images: req.files?.map(f => f.path)
  });
  res.json(product);
};

exports.getProducts = async (req, res) => {
  res.json(await Product.find().populate("category"));
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product removed" });
};
