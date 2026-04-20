import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, department, message } = await req.json();
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "admin@quicktradefx.com",
        pass: "dbbs hhgf lhpd jezt",
      },
    });

    // Render ejs template
    const templatePath = path.join(
      process.cwd(),
      "static/email_template/contact_template.ejs",
    );
    const html = await ejs.renderFile(templatePath, {
      firstName,
      lastName,
      email,
      department,
      message,
    });

    const mailOptions = {
      from: "QuickTradeFX<admin@quicktradefx.com>",
      to: "admin@quicktradefx.com",
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html,
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, info });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}