const nodemailer = require('nodemailer');

async function sendEmail() {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SMTP_HOST,
    port: Number(process.env.EMAIL_SMTP_PORT || 587),
    secure: false,
    auth: {
      user: process.env.EMAIL_SMTP_USER,
      pass: process.env.EMAIL_SMTP_PASS
    }
  });

  const reportUrl = process.env.REPORT_URL;
  const status = process.env.TEST_STATUS;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: `Playwright Report - ${status}`,
    text: `Execution Status: ${status}\nReport: ${reportUrl}`
  });

  console.log('Email sent successfully');
}

sendEmail().catch(console.error);