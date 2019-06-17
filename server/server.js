require('dotenv').config();
const express = require('express'),
    cors = require('cors'),
    app = express(),
    { SERVER_PORT } = process.env,
    port = SERVER_PORT || 5000,
    posts = require('./routes/api/posts')

//Middleware
app.use(express.json());
app.use(cors());
app.use('/api/posts', posts)


app.listen(port, () => console.log(`Server listening on port: ${port}`))

