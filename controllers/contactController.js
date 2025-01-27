const nodemailer = require('nodemailer');

// GET: Display contact form
exports.getContact = (req, res) => {
    res.render('Contact/contact');
  };
  
  // POST: Submit contact form
exports.submitContactForm = async (req, res) => {
    const { name, email, subject, message } = req.body;
  
    // Validate input fields
    if (!name || !email || !subject || !message) {
      return res.json({
        success: false,
        error: 'All fields are required. Please fill out the form completely.',
      });
    }
  
    try {
      // Nodemailer transport configuration
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'jayulomi160@gmail.com',
          pass: 'hfjxrqnmcbrrcawi', // Make sure this is correct
        },
      });
  
      // Email to you (admin)
      const adminMailOptions = {
        from: email,
        to: 'ulomijay160@gmail.com', // Replace with your email
        subject: `${subject}`,
        text: `You have a new message from ${name} (${email}):\n\n${message}`,
      };
  
      // Email to the sender (thank you email)
      const senderMailOptions = {
        from: 'ulomijay160@gmail.com', // Replace with your email
        to: email,
        subject: 'Thank You for Contacting Us',
        text: `Hi ${name},\n\nThank you for reaching out. We have received your message:\n"${message}"\n\nWe'll get back to you soon.\n\nBest regards,\nYour Chitatelecom`,
      };
  
      // Send emails
      await transporter.sendMail(adminMailOptions);
      await transporter.sendMail(senderMailOptions);
  
      // Render success response
      res.json({ success: true, error: null });
    } catch (error) {
      console.error(error);
      res.json({ success: false, error: 'Failed to send your message. Please try again later.' });
    }
  };
  