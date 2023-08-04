const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

const port = process.env.PORT || 5000;



app.get('/', (req, res) => {
    res.send('Chat Server is running')
});

app.listen(port, () => {
    console.log(`Chat Server is running on port: ${port}`)
})