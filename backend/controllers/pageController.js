const Page = require("../models/Page");


exports.getPage = async (req, res) => {
const page = await Page.findOne({ pageName: req.params.page });
res.json(page);
};


exports.updatePage = async (req, res) => {
const page = await Page.findOneAndUpdate(
{ pageName: req.params.page },
{ sections: req.body.sections },
{ upsert: true, new: true }
);
res.json(page);
};