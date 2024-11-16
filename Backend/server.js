require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoute");

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use("/contacts", contactRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
