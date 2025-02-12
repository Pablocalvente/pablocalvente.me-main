import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // NO pongas el email aquí directamente
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    const mailOptions = {
      from: process.env.EMAIL_USER, // Usa la variable de entorno en lugar de pasar `email`
      to: "pablocalvente.work@gmail.com", 
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
