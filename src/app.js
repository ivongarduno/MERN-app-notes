const express = require('express');
const cors = require('cors');
const app = express();

//settings
app.set('port', process.env.PORT || 4000); //se declara la variable port

//middlewares
app.use(cors());
app.use(express.json());

//Serve up static assets (heroku)
if (process.env.NODE_ENV === "production"){
    app.use(express.static('frontend/build'));

    app.get('*',(req,res) => {
        res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
    });
}

//routes
app.use('/api/users', require('./routes/users') );
app.use('/api/notes', require('./routes/notes'));

module.exports = app;