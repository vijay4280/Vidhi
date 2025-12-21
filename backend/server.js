const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const adminRoutes = require("./routes/adminRoutes");
const contactRoutes = require("./routes/contactRoutes");
const newsletterRoutes = require("./routes/newsletterRoutes");
const pageRoutes = require("./routes/pageRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");


dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Static uploads
app.use("/uploads", express.static("uploads"));
app.use("/api/admin", adminRoutes);
app.use("/api/contact", contactRoutes);
  app.use("/api/newsletter", newsletterRoutes);
  app.use("/api/pages", pageRoutes);
  app.use("/api/categories", categoryRoutes);
  app.use("/api/products", productRoutes);




 

app.get("/", (req, res) => {
  res.send("Irrigation MERN API Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




