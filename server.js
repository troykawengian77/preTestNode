const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/btn1', (req, res) => {
    console.log(req.input)
})

const PORT = 8080;
app.listen(PORT, () => {
    console.log('server is running')
})