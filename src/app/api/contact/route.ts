import { NextResponse } from "next/server";
import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Validate đơn giản
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Gửi email
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", 
      to: "dotienmanh070104@gmail.com",          
      reply_to: email,                            
      subject: `New contact message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${String(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[/api/contact] error:", e);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
