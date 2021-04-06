require('dotenv').config();
const axios = require("axios");

const BASE_URL = `https://api.giphy.com/v1`;
const API_KEY = process.env.GIPHY_API_KEY;

module.exports = {
    getRandomGif: () => axios({
        method:"GET",
        url : `${BASE_URL}/gifs/random?api_key=${API_KEY}`
    }),
    getRandomSticker: () => axios({
        mathod: "GET",
        url: `${BASE_URL}/stickers/random?api_key=${API_KEY}`
    })
}