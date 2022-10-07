const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const dotenv = require('dotenv').config()

const methodOverride = require('method-override')

const app = express();
const PORT = process.env.PORT || 8080;

// ... other app.use middleware 
app.use(express.static(path.join(__dirname, "client", "build")))

const MONGODB_URI = process.env.MONGODB_CONNECTION_STRING

const routes = require('./src/routes/api')

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!')
})

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'))

app.use(cors());
//Http request logger
app.use(morgan('tiny'))
app.use('/', routes)

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, console.log(`Server is starting at ${PORT}`));