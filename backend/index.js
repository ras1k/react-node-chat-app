const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
require('dotenv').config();

const port = process.env.PORT || 5000;

const CHAT_ENGINE_PROJECT_ID = process.env.CHAT_ENGINE_PROJECT_ID;
const CHAT_ENGINE_PRIVATE_KEY = process.env.CHAT_ENGINE_PRIVATE_KEY;
console.log(CHAT_ENGINE_PRIVATE_KEY);

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username },
            { headers: { "private-key": CHAT_ENGINE_PRIVATE_KEY } }
        )
        return res.status(r.status).json(r.data)
    } catch (e) {
        return res.status(e.response.status).json(e.response.data)
    }
});

app.get('/', (req, res) => {
    res.send('Chat Server is running')
});

app.listen(port, () => {
    console.log(`Chat Server is running on port: ${port}`)
})