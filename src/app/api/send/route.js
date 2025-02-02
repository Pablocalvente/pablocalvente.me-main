import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    // Lee las variables de tu .env.local
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    const mailOptions = {
      from: email,
      to: "pablocalvente.work@gmail.com", // El correo adonde quieres que lleguen los mensajes
      subject: `Nuevo mensaje de ${email}: ${subject}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);
    console.log("Correo enviado con éxito");

    return NextResponse.json({ success: true, message: "Correo enviado" });

  } catch (error) {
    console.error("Error en el envío:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
