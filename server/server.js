const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'yangcui4@gmail.com',
        pass: 'cmrlxscaatspwcas',
    },
});

app.post('/send-email', (req, res) => {
    const { name, email, message,linkedin,github } = req.body;

    const mailOptions = {
        from: 'yangcui4@gmail.com',
        to: 'yangcui4@gmail.com',
        subject: 'New message from your portfolio',
        text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred while sending the email' });
        } else {
            console.log('Email sent:', info.response);
            res.json({ success: true });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
