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
  const {
    userName,
    userEmail,
    phone,
    clientEmail,
    subject,
    message,
    attachments,
    type,
  } = await req.json();

  // !userEmail || !clientEmail
  if (!userEmail || !clientEmail) {
    return NextResponse.json(
      { success: false, message: "Recipient email(s) missing" },
      { status: 400 }
    );
  }

  // Email options for the user (acknowledgment)
  const userMailOptions = {
    from: `DAGA & DAGA - "${clientEmail}" <${"support@webibee.com"}>`,
    to: userEmail,
    subject: "Acknowledgment: We received your Application",
    html: `<p>Dear Applicant,</p>
           <p>Greetings from Daga and Daga!</p>
           <p>We appreciate your interest in joining our team and acknowledge receipt of your application.</p>
           <p>Your application will be shared with the relevant department for review. If your profile aligns with any suitable openings, we will contact you to discuss the opportunity further. Thank you once again for considering a career with us.</p>
           <p>Best regards,<br>Daga and Daga</p>
           <p>Thanks & Regards,<br>Jayesh Kumar A.<br>Advocate<br>+91- 9551028280</p>`,
  };

  // Email options for the client (all user data and attachments)
  const clientMailOptions = {
    from: `"${userEmail}" <${"support@webibee.com"}>`,
    to: clientEmail,
    subject: subject,
    html: `
            <div className="block space-y-10 font-merriWeather">
            <h4 className="!text-lg !capitalize">Hi,</h4>
            <p>You have a new form submission for ${type}</p>
            <p className="!flex !items-center !justify-center !gap-3">
            <span className="!capitalize !font-bold">Name:</span> 
            ${userName}
            </p>
            <p>Email: ${userEmail}</p>
            <p>Phone Number: ${phone}</p>
            <p>Query: ${message}</p>
            <br/>
            <br/>
            <p>Thanks</p>
            </div> 
            `,
    attachments: attachments.map((attachment) => ({
      filename: attachment.filename,
      content: Buffer.from(attachment.content),
      contentType: attachment.contentType,
    })),
    bcc: ["enquiry@dagaanddaga.com"],
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
      { success: false, message: error.message || "Error sending emails" },
      { status: 500 }
    );
  }
}
