const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// const items = require('./routes/api/items');


// SETUP EXPRESS APP
const app = express();


// CONNECT TO DB

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db, {useNewUrlParser: true})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

//mongoose.Promise = global.Promise;


// USE MIDDLEWARE

// Bodyparser Middleware
app.use(bodyParser.json());

// Initialize Routes
// app.use('/api/items', items);

// error handling middleware
app.use(function(err, req, res, next){
    console.log(err);
    //Unprocessable Entity
    res.status(422).send({error: err.message});
});



// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


// LISTEN FOR REQUESTS
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}...`));