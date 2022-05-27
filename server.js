const express = require('express');
const PORT = process.env.PORT || 3001;

const path = require('path');
const app = express();
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/notesRoutes');


// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));
// Api  routes and html routes starts here
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});