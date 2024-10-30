import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, message } = await req.json();

  const htmlContent = `
  <div style="font-family: Arial, sans-serif; color: black;">
    <div style="background-color: #D8F3DC; padding: 20px; text-align: center;">
      <h2 style="color: #1B4332;">New Message from ${name}</h2>
    </div>
    <div style="padding: 20px;">
      <p style="font-size: 16px;">Hello,</p>
      <p style="font-size: 16px;">You have received a new message from <strong>${name}</strong> (${email}):</p>
      <blockquote style="background-color: #f9f9f9; padding: 10px 20px; border-left: 4px solid #52B788;">
        <p style="font-size: 14px;">${message}</p>
      </blockquote>
      <p style="font-size: 14px; color: black">Thank you,<br>Your Application Team</p>
    </div>
    <div style="background-color: #D8F3DC; padding: 10px; text-align: center; font-size: 12px; color: black">
      <p>© 2024 Portfolio-Builder. All rights reserved.</p>
    </div>
  </div>
`;


  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // e.g., smtp.example.com
    port: 465, 
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'gokulpnr2001@gmail.com', // Replace with your email
      subject: `New message from ${name}`,
    //   text: message,
      html:htmlContent,
      replyTo: email,
    });

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Failed to send email' }), { status: 500 });
  }
}
