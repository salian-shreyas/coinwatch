import axios from 'axios';
import express, { response } from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';

const API_URL = 'https://api.coingecko.com/api/v3/'
const API_KEY = process.env.COINGECKO_API_KEY;

const port = 3000;
const app = express();

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(
            API_URL + 'coins/markets',
            {
                headers: { 'x-cg-demo-api-key': API_KEY },
                params: {
                    'vs_currency': 'inr',
                    'price_change_percentage': '24h',
                },
            }
        );
        res.render("index.ejs", { coins: response.data });
    } catch (error) {
       console.log(error); 
       res.sendStatus(404);
    }  
});

app.listen(port, () => {
    console.log(`CoinWatch: server running on port ${port}`);
});