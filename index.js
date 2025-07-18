import axios from "axios";
import express from "express";
import bodyParser from "body-parser";
import "dotenv/config"

const port = 3000;
const app = express();

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.listen(port, () => {
    console.log(`CoinWatch: server running on port ${port}`);
});