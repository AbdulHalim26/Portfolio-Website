import { NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { error: "Email service not configured. Please email me directly at halimjunior52@gmail.com" },
        { status: 503 }
      )
    }

    const { Resend } = await import("resend")
    const resend = new Resend(process.env.RESEND_API_KEY)

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "halimjunior52@gmail.com",
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      replyTo: email,
    })

    return Response.json({ success: true, data })
  } catch (error) {
    console.error("Contact form error:", error)
    return Response.json(
      { error: "Failed to send message. Please try emailing me directly at halimjunior52@gmail.com" },
      { status: 500 }
    )
  }
}
