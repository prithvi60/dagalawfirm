import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import fs from "fs";

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
  let userMailOptions;
  if (type === "Contact") {
    // Email options for the user (acknowledgment)
    userMailOptions = {
      from: `DAGA & DAGA - "${clientEmail}" <${"support@webibee.com"}>`,
      to: userEmail,
      subject: "Acknowledgment: We received your Enquiry",
      html: `<p>Dear Applicant,</p>
           <p>Greetings from Daga and Daga!</p>
           <p>We have received your enquiry, our team will revert back shorty.</p>
                    <p>Thanks & Regards,<br>
                    <br>  <img src="cid:daga-new-logo" alt="Daga Logo" style="width: 40px; height: auto; margin-top: 8px;"/>
                    <br>
           <span style="margin-top: 2px;">Daga & Daga Intellectual Property Attorneys<span><br>
           <span style="margin-top: 2px;">  Swarna Shree complex, 3rd Floor.<br>
           No. 36, Veerappan street, Sowcarpet,<br>
           Chennai, Tamil Nadu, India - 600 079</span><br>
           <a style="margin-top: 2px;" href="https://dagaanddaga.com/">https://dagaanddaga.com/</a><br>
            <span style="margin-top: 2px;"> +91- 98410 69123 / +91- 9551028280<br>
           044 - 29550176</span></p>
        `,
      attachments: [
        {
          filename: "daga-new-logo.png", // Ensure the filename matches the logo file
          content: Buffer.from(
            await fs.promises.readFile("public/daga-new-logo.png")
          ),
          contentType: "image/png",
          cid: "daga-new-logo", // This cid should match the one used in the email body
        },
      ],
    };
  } else {
    // Existing email options for other types of submissions
    userMailOptions = {
      from: `DAGA & DAGA - "${clientEmail}" <${"support@webibee.com"}>`,
      to: userEmail,
      subject: "Acknowledgment: We received your Application",
      html: `<p>Dear Applicant,</p>
             <p>Greetings from Daga and Daga!</p>
             <p>We appreciate your interest in joining our team and acknowledge receipt of your application.</p>
             <p>Your application will be shared with the relevant department for review. If your profile aligns with any suitable openings, we will contact you to discuss the opportunity further. Thank you once again for considering a career with us.</p>
                   <p>Thanks & Regards,<br>
                    <br>  <img src="cid:daga-new-logo" alt="Daga Logo" style="width: 40px; height: auto; margin-top: 8px;"/>
                    <br>
           Daga & Daga Intellectual Property Attorneys<br>
           Swarna Shree complex, 3rd Floor.<br>
           No. 36, Veerappan street, Sowcarpet,<br>
           Chennai, Tamil Nadu, India - 600 079<br>
           <a href="https://dagaanddaga.com/">https://dagaanddaga.com/</a><br>
           +91- 98410 69123 / +91- 9551028280<br>
           044 - 29550176</p>`,
      attachments: [
        {
          filename: "daga-new-logo.png", // Ensure the filename matches the logo file
          content: Buffer.from(
            await fs.promises.readFile("public/daga-new-logo.png")
          ),
          contentType: "image/png",
          cid: "daga-new-logo", // This cid should match the one used in the email body
        },
      ],
    };
  }

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
    // Send acknowledgment email to the customer
    await transporter.sendMail(userMailOptions);
    // console.log("Acknowledgment email sent to user.");

    // Send detailed email to the DagaandDaga
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
