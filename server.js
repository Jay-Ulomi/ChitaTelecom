const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path'); 
const PORT = 3030;

// Import routes
const homeRoutes = require('./routes/HomeRoutes');
const contactRoutes = require('./routes/contactRoutes');


// Middleware to parse form data
const upload = multer();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use(expressLayouts);

app.use(express.static('public'));

// Use routes
app.use('/', homeRoutes);
app.use('/contact', contactRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
