const express = require("express");
const app = express();
const PORT = 5000;
const authRoute = require("./routers/auth");
require("dotenv").config();

app.use(express.json());

app.use("/api/auth", authRoute);

app.listen(PORT, () => console.log(`server is running on Port ${PORT}`));
