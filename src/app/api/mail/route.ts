import { MailTemplate } from '@/components/mailTemplate/mailTemplate'
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
    const { name, message, email } = await req.json()
    try {
        const data = await resend.emails.send({
            from: `Teemu <${process.env.EMAIL_FROM_ADDRESS}>`,
            to: [`${process.env.EMAIL_TO_ADDRESS}`],
            subject: `contact ${name}`,
            react: MailTemplate({ name: name, email: email, message: message }),
        })

        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({ error })
    }
}
