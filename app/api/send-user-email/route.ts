import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";

// ✅ Reusable transporter (Hostinger)
const transporter = nodemailer.createTransport({
   host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "admin@quicktradefx.com",
        pass: "dbbs hhgf lhpd jezt",
      },

});

transporter.verify((error) => {
  if (error) console.error("User SMTP error:", error);
  else console.log("User SMTP ready");
});

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, department, message } = await req.json();

    // Combine first and last name for the template
    const name = `${firstName} ${lastName}`.trim();

    const templatePath = path.join(
      process.cwd(),
      "static/email_template/consultation_template.ejs"
    );
    const html = await ejs.renderFile(templatePath, {
      name,
      email,
      message, // You may also pass department if needed
    });

    const mailOptions = {
      from: "QuickTradeFX <admin@quicktradefx.com>",
      to: email, 
      subject: "Thank you for contacting QuickTradeFX",
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error("User email error:", error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}