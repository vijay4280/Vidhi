const Newsletter = require("../models/Newsletter");


exports.subscribe = async (req, res) => {
try {
await Newsletter.create({ email: req.body.email });
res.json({ message: "Subscribed successfully" });
} catch {
res.json({ message: "Already subscribed" });
}
};


exports.getSubscribers = async (req, res) => {
res.json(await Newsletter.find());
};