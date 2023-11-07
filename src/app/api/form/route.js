import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Resend } from 'resend';

const EMAILTO = process.env.EMAILTO;
const EMAILFROM = process.env.EMAILFROM;

const PASSWORD = process.env.PASS;
const KEY = process.env.KEY;

export async function POST(request){
  const formData = await request.json();
  console.log(formData)

  const resend = new Resend(KEY);
    try {
      const data = await resend.emails.send({
        from: EMAILFROM,
        to: EMAILTO,
        subject: `Seppukoool Form Submission`,
        html: `${JSON.stringify(formData)}`
      });
      console.log(data);
      return NextResponse.json({ formData });

    } catch (error) {
      console.error('Error:', error);
      return NextResponse.json({ error: 'Form submission failed' }, { status: 500 });    
    }
}

// Create a transporter for sending emails
// const transporter = nodemailer.createTransport({
//   service: 'Gmail', // Use your email service (e.g., Gmail)
//   auth: {
//     user: USER, // Your email address
//     pass: PASSWORD, // Your email password or app-specific password
//   },
// });

// export async function POST(request) {
//   try {
//     const formData = await request.json();
//     sendEmail(formData);

//     // Insert data into MongoDB (if needed)
//     // await add(formData);

//     return NextResponse.json({ message: 'Form data inserted successfully' });
//   } catch (error) {
//     console.error('Error:', error);
//     // Return an error response
//     return NextResponse.json({ error: 'Form submission failed' }, { status: 500 });
//   }
// }


// function sendEmail(formData) {
//   // Email content
//   const mailOptions = {
//     from: USER, // Sender's email address
//     to: USER, // Recipient's email address
//     subject: 'New Form Submission',
//     text: JSON.stringify(formData), // You can format the email content as needed
//   };

//   // Send the email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Email sending failed:', error);
//     } else {
//       console.log('Email sent:', info.response);
//     }
//   });
// }
