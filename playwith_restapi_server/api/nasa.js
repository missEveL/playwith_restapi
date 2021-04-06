require('dotenv').config();
const axios = require("axios");
const BASE_URL = `https://api.nasa.gov`;
const API_KEY = process.env.NASA_API_KEY;

module.exports = {
    getPOD: () => axios({
        method:"GET",
        url : `${BASE_URL}/planetary/apod?api_key=${API_KEY}`
    }),
    getNOTIF: () => axios({
        mathod: "GET",
        url: `${BASE_URL}/DONKI/notifications?api_key=${API_KEY}`
    }),
    getEARTH: () => axios({
        mathod: "GET",
        url: `${BASE_URL}/planetary/earth/imagery/?api_key=${API_KEY}&lon=-80.241216&lat=25.728214&cloud_score=True`
    })
}