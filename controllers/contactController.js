const nodemailer = require('nodemailer');
require('dotenv').config();
// GET: Display contact form
exports.getContact = (req, res) => {
    res.render('Contact/contact');
  };
  
  // POST: Submit contact form
  exports.submitContactForm = async (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    // Validate input fields
    if (!name || !email || !phone || !subject || !message) {
        return res.status(400).json({
            success: false,
            error: 'All fields are required.',
        });
    }

    try {
        // Nodemailer transport configuration
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: 465, // 465 for SSL, 587 for TLS
            secure: true, 
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        // Admin email
        await transporter.sendMail({
            from: `"Chitatelecom Support" <${process.env.MAIL_USER}>`,
            to: 'connect@chita.co.tz',
            subject: subject,
            text: `New message from ${name} ${phone} (${email}):\n\n${message}`,
        });

        // Thank-you email to sender
        await transporter.sendMail({
            from: `"Chitatelecom" <${process.env.MAIL_USER}>`,
            to: email,
            subject: 'Thank You for Contacting Us',
            text: `Hi ${name},\n\nThank you for reaching out. We have received your message:\n"${message}"\n\nWe will respond shortly.\n\nBest regards,\nChitatelecom Team`,
        });

        res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, error: 'Failed to send your message. Please try again later.' });
    }
};
  