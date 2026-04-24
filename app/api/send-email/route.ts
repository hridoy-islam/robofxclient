import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "mail.rivaantech.ae",
      port: 465,
      secure: true,
      auth: {
        user: "noreplay@rivaantech.ae",
        pass: "+WT@S}vFFHa{",
      },
    });

    // Render ejs template
    const templatePath = path.join(
      process.cwd(),
      "static/email_template/contact_template.ejs",
    );

    // Updated to pass the correct variables to your EJS template
    const html = await ejs.renderFile(templatePath, {
      name,
      email,
      subject,
      message,
    });

    const mailOptions = {
      from: '"Rivaan Tech" <noreplay@rivaantech.ae>',
      to: "info@rivaantech.ae",
      
      subject: `New Contact Form Submission from ${name}: ${subject}`,
      html,
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, info });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
