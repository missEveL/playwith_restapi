require('dotenv').config();
const axios = require("axios");

const BASE_URL = `https://api.setlist.fm/rest/1.0`;
const API_KEY = process.env.SETLISTFM_API_KEY;

module.exports = {
    searchArtists: (artistName) => axios({
        method:"GET",
        url : `${BASE_URL}/search/artists?artistName=${artistName}&p=1&sort=relevance`,
        headers: {
            "x-api-key": `${API_KEY}`
        }
    }),
    getSetlists: (mbid) => axios({
        mathod: "GET",
        url: `${BASE_URL}/search/setlists?artistMbid=${mbid}`,
        headers: {
            "x-api-key": `${API_KEY}`
        }
    }),
}