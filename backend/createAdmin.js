const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Admin = require("./models/Admin");

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected");

    const adminExists = await Admin.findOne({ email: "anything@gmail.com" });

    if (adminExists) {
      console.log("Admin already exists");
      process.exit();
    }

    await Admin.create({
      email: "anything@gmail.com",
      password: "admin@123"
    });

    console.log("Admin created successfully");
    process.exit();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
