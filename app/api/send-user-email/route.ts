import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";

// ✅ Reusable transporter (Hostinger)
const transporter = nodemailer.createTransport({
  host: "mail.rivaantech.ae",
  port: 465,
  secure: true,
  auth: {
    user: "noreplay@rivaantech.ae",
    pass: "+WT@S}vFFHa{",
  },
});

transporter.verify((error) => {
  if (error) console.error("User SMTP error:", error);
  else console.log("User SMTP ready");
});

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    const templatePath = path.join(
      process.cwd(),
      "static/email_template/contact_user-template.ejs",
    );
    const html = await ejs.renderFile(templatePath, {
      name,
      email,
      message,
    });

    const mailOptions = {
      from: '"Rivaan Tech" <noreplay@rivaantech.ae>',
      to: email,
      subject: "Thank you for contacting Rivaan Tech",
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error("User email error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
