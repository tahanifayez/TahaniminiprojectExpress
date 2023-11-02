const express = require("express");
const app = express();
app.use(express.json());

const Booksroutes = require("./api/routes");
const connectDB = require("./database");

app.use("/Book", Booksroutes);

connectDB();
app.listen(8000, console.log("app is running in port 8000"));
