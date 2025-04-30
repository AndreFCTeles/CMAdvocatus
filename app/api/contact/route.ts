// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

//export async function POST(req: NextRequest) {
export const POST = async (req: NextRequest) =>{
   try {
      const { formName, formEmail, formTel, formMsg, token } = await req.json()

      if (!formName || !formEmail || !formTel || !formMsg) {
         return NextResponse.json(
            { error: 'Missing required fields.' },
            { status: 400 }
         )
      }
      if (!token) {
         return NextResponse.json({ error: 'Missing reCAPTCHA token' }, 
         { status: 400 });
      }

      
      // 1. Verify the reCAPTCHA token with Google
      const secretKey = process.env.RECAPTCHA_SECRET_KEY!;
      const verificationUrl = "https://www.google.com/recaptcha/api/siteverify";
      const params = new URLSearchParams();
      params.append("secret", secretKey);
      params.append("response", token);
      // Optionally, include user's IP if you want to send 'remoteip'
      // params.append("remoteip", request.ip || "");

      const verifyResponse = await fetch(verificationUrl, {
         method: "POST",
         body: params
      });
      const verificationResult = await verifyResponse.json();

      console.log("reCAPTCHA verification result:", verificationResult);

      if (!verificationResult.success) {
         // reCAPTCHA failed or token is invalid/expired
         return NextResponse.json({ error: "reCAPTCHA verification failed" }, { status: 400 });
      }

      // 2. Create a Nodemailer transporter using SMTP (adjust settings as needed)
      const transporter = nodemailer.createTransport({
         host: process.env.SMTP_HOST,
         port: parseInt(process.env.SMTP_PORT || '465', 10),
         secure: true, // true for port 465, false for port 587*
         auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
         },
      })

      const mailOptions = {
         from: `"Website Contact Form" <${process.env.SMTP_USER}>`,
         to: process.env.CONTACT_TO,
         subject: 'Novo contacto recebido via cmadvocatus.com',
         html: `
            <h2>Nova mensagem de contacto:</h2>
            <p><strong>Nome:</strong> ${formName}</p>
            <p><strong>Email:</strong> ${formEmail}</p>
            <p><strong>Telefone:</strong> ${formTel || 'Não fornecido'}</p>
            <p><strong>Conteúdo da mensagem:</strong><br />${formMsg}</p>
         `,
      }

      await transporter.sendMail(mailOptions)

      return NextResponse.json({ success: true })
   } catch (error) {
      console.error('Email sending error:', error)
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
   }
}
