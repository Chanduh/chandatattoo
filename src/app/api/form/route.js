import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const USER = process.env.USER;
const PASSWORD = process.env.PASS;

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Use your email service (e.g., Gmail)
  auth: {
    user: USER, // Your email address
    pass: PASSWORD, // Your email password or app-specific password
  },
});

export async function POST(request) {
  try {
    const formData = await request.json();
    sendEmail(formData);

    // Insert data into MongoDB (if needed)
    // await add(formData);

    return NextResponse.json({ message: 'Form data inserted successfully' });
  } catch (error) {
    console.error('Error:', error);
    // Return an error response
    return NextResponse.json({ error: 'Form submission failed' }, { status: 500 });
  }
}


function sendEmail(formData) {
  // Email content
  const mailOptions = {
    from: USER, // Sender's email address
    to: USER, // Recipient's email address
    subject: 'New Form Submission',
    text: JSON.stringify(formData), // You can format the email content as needed
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Email sending failed:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}
