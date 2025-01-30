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
const serviceRoutes = require('./routes/serviceRoutes');
const contactRoutes = require('./routes/contactRoutes');
const planRoutes = require('./routes/planRoutes');
const aboutRoutes = require('./routes/aboutRoutes');
const fqnRoutes = require('./routes/fqnRoutes');
const CodeRoutes = require('./routes/codeRoutes');
const HelthRoutes = require('./routes/HelthRoutes');
const PrivacyRoutes = require('./routes/PrivacyRoutes');
const TermsRoutes = require('./routes/TermsRoutes');


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
app.use('/service', serviceRoutes);
app.use('/contact', contactRoutes);
app.use('/plan', planRoutes);
app.use('/about', aboutRoutes);
app.use('/fqn', fqnRoutes);
app.use('/code', CodeRoutes);
app.use('/helth', HelthRoutes);
app.use('/privacy', PrivacyRoutes);
app.use('/terms', TermsRoutes);

// Error handling middleware
app.use((req, res, next) => {
    res.status(404).render("404/404")
  });

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
