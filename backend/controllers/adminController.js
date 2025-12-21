const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");


const generateToken = (id) => {
return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });

  console.log("EMAIL SENT:", email);
  console.log("PASSWORD SENT:", password);
  console.log("ADMIN FOUND:", admin);

  if (admin) {
    const isMatch = await admin.matchPassword(password);
    console.log("PASSWORD MATCH:", isMatch);
  }

  if (admin && await admin.matchPassword(password)) {
    res.json({
      _id: admin._id,
      email: admin.email,
      token: generateToken(admin._id)
    });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};
