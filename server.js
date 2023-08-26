const express = require("express");
const app = express();
const connectDB = require("./config/db");

connectDB();

//* Initializing middleware
app.use(express.json({ extended: false }));

//* this maybe for viewing static pages
// app.use(express.static("public"));

//* start testing
app.get("/", (req, res) => {
  res.send("Meal Manager Server Started...");
});

//* Routes
app.use("/api/student", require("./routes/api/student"));
app.use("/api/login", require("./routes/api/studentLogin"));
app.use("/api/scanner", require("./routes/api/scanner"));
app.use("/api/admin", require("./routes/api/admin"));
app.use("/api/manager", require("./routes/api/manager"));
app.use("/api/transaction", require("./routes/api/transaction"));
//* port
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
