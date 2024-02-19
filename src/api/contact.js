import { RequestHandler } from "astro";

export const post = async ({ request }) => {
  console.log("hi there");
  // Using `request.formData` (form-encoded data)
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Example using `nodemailer`
  const transporter = nodemailer.createTransport({
    service: "gmail", // e.g., "gmail", "sendgrid"
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: "your-sender-email",
    to: "your-recipient-email",
    subject: "New message from your website",
    html: `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
  `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      status: 200,
      body: JSON.stringify({ message: "Email sent successfully!" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      status: 500,
      body: JSON.stringify({ message: "Error sending email" }),
    };
  }
};
