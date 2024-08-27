const express = require("express");
require("dotenv").config();

// initialise app
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    // console.log("Server listening on PORT :", PORT);
});

// routes -----------
const domainRoutes = require("./routes/domainRoutes");

app.use("/api/v1", domainRoutes);

app.get("/", (req, res) => {
    res.status(200).send("Hello from the API route!");
});
