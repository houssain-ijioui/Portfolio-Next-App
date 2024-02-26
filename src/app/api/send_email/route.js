import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'


export async function POST(request) {
    try {
        const { toEmail, subject, body } = await request.json();

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.NODEMAILER_EMAIL,
                pass: process.env.NODEMAILER_PASSWORD
            }
        })

        const mailOptions = {
            from: toEmail,
            to: process.env.NODEMAILER_EMAIL,
            subject: subject,
            text: body 
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log("node mailer error", err);
            }
        })

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}