import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { businessName, contactName, email, phone, industry, projectType, pages, selectedFeatures, hasBranding, budget, timeline, notes } = body

    await resend.emails.send({
      from: 'IZMVH Website <onboarding@resend.dev>',
      to: 'iza.vuyo@izmvh.co.za',
      subject: `New Quote Request from ${businessName}`,
      html: `
        <h2>New Quote Request</h2>
        <h3>Business Information</h3>
        <p><strong>Business:</strong> ${businessName}</p>
        <p><strong>Contact:</strong> ${contactName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Industry:</strong> ${industry || 'Not provided'}</p>
        <h3>Project Details</h3>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Pages:</strong> ${pages || 'Not specified'}</p>
        <p><strong>Features:</strong> ${selectedFeatures?.join(', ') || 'None'}</p>
        <p><strong>Existing Branding:</strong> ${hasBranding || 'Not specified'}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>Notes:</strong> ${notes || 'None'}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
