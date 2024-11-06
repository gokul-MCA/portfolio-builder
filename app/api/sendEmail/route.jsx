import nodemailer from 'nodemailer';

export async function POST(req) {
  const { userName, userEmail, userTextarea } = await req.json();

  const htmlContent = `
  <div style="font-family: Arial, sans-serif; color: black;">
    <div style="background-color: #D8F3DC; padding: 20px; text-align: center;">
      <h2 style="color: #1B4332;">New Message from ${userName}</h2>
    </div>
    <div style="padding: 20px;">
      <p style="font-size: 16px;">Hello,</p>
      <p style="font-size: 16px;">You have received a new message from <strong>${userName}</strong> (${userEmail}):</p>
      <blockquote style="background-color: #f9f9f9; padding: 10px 20px; border-left: 4px solid #52B788;">
        <p style="font-size: 14px;">${userTextarea}</p>
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
      from: userEmail,
      to: 'gokulpnr2001@gmail.com', // Replace with your userEmail
      subject: `New message from ${userName}`,
    //   text: message,
      html:htmlContent,
      replyTo: userEmail,
    });

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Failed to send email' }), { status: 500 });
  }
}
