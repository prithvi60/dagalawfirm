import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  // host: "smtp.office365.com",
  // port: 587,
  // secure: false,
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(req) {
  // const { recipientEmail, subject, message, attachments } = await req.json();
  const { userEmail, clientEmail, subject, message, attachments } =
    await req.json();

  if (!userEmail || !clientEmail) {
    return NextResponse.json(
      { success: false, message: "Recipient email(s) missing" },
      { status: 400 }
    );
  }

  // Email options for the user (acknowledgment)
  const userMailOptions = {
    from: clientEmail,
    to: userEmail,
    subject: "Acknowledgment: We received your submission",
    html: `<p>Thank you for your submission! We’ll be in touch soon.</p>`,
  };

  // Email options for the client (all user data and attachments)
  const clientMailOptions = {
    from: userEmail,
    to: clientEmail,
    subject: subject,
    html: `
            <div className="block space-y-10 font-merriWeather">
            <h6 className="text-sm capitalize">Dear Daga and Daga Intellectual Property Attorneys Team, </h6>
            <p className="text-base">${message}</p>
            </div> 
            `,
    attachments: attachments.map((attachment) => ({
      filename: attachment.filename,
      content: Buffer.from(attachment.content),
      contentType: attachment.contentType,
    })),
    bcc: ["enquiry@dagaanddaga.com", "gokulgandhi97@gmail.com"],
  };

  try {
    // Send acknowledgment email to the user
    await transporter.sendMail(userMailOptions);
    // console.log("Acknowledgment email sent to user.");

    // Send detailed email to the client
    await transporter.sendMail(clientMailOptions);
    // console.log("Email with user data and attachments sent to client.");

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully",
    });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json(
      { success: false, message: "Error sending emails" },
      { status: 500 }
    );
  }
}
