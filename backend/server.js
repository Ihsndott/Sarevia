require ("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");

//import routes
const productRoutes = require("../backend/src/routes/product.routes");

//import checkout payment
const paymentRoutes = require("./src/routes/payment.routes");

//import nodemailer
const receiveEmailRoutes = require("./src/routes/email.routes");

const app = express();

app.use(cors());
app.use(express.json());


//routes
app.use("/api/products",productRoutes);
app.use("/api/payment",paymentRoutes);
app.use("/api/email",receiveEmailRoutes);

connectDB();

app.listen(5000,()=>{
    console.log("Server running successfully...")
});