import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
  practiceArea?: string;
  caseType?: string;
  urgency?: 'normal' | 'soon' | 'urgent';
}

export async function POST(request: Request) {
  try {
    const body: ContactRequest = await request.json();
    const { name, email, phone, message, practiceArea, caseType, urgency } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Create transporter (you'll need to configure this with actual email credentials)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // Use App Password, not regular password
      },
    });

    // Create HTML email template
    const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f4f4f4;
          }
          .container {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
          }
          .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 30px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
          }
          .urgent-banner {
            background-color: #ef4444;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            margin-bottom: 20px;
            text-align: center;
            font-weight: bold;
          }
          .info-section {
            margin-bottom: 25px;
            padding: 20px;
            background-color: #f8f9fa;
            border-radius: 8px;
            border-left: 4px solid #667eea;
          }
          .info-section h3 {
            margin-top: 0;
            color: #667eea;
            font-size: 18px;
          }
          .info-row {
            display: flex;
            margin-bottom: 12px;
            align-items: flex-start;
          }
          .info-label {
            font-weight: bold;
            min-width: 120px;
            color: #555;
          }
          .info-value {
            flex: 1;
            padding-left: 10px;
          }
          .message-section {
            background-color: #ffffff;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 25px;
          }
          .message-section h3 {
            margin-top: 0;
            color: #374151;
          }
          .message-content {
            background-color: #f9fafb;
            padding: 15px;
            border-radius: 5px;
            border-left: 3px solid #667eea;
            font-style: italic;
            line-height: 1.8;
          }
          .footer {
            text-align: center;
            padding: 20px;
            background-color: #1f2937;
            color: white;
            border-radius: 8px;
            margin-top: 30px;
          }
          .footer p {
            margin: 5px 0;
          }
          .priority-high {
            background-color: #fef2f2;
            border-left-color: #ef4444;
          }
          .priority-medium {
            background-color: #fffbeb;
            border-left-color: #f59e0b;
          }
          .priority-low {
            background-color: #f0f9ff;
            border-left-color: #3b82f6;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🏛️ New Client Inquiry - Noriega Law</h1>
            <p>Received: ${new Date().toLocaleString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              timeZoneName: 'short'
            })}</p>
          </div>

          ${urgency === 'urgent' ? '<div class="urgent-banner">🚨 URGENT CASE - IMMEDIATE ATTENTION REQUIRED</div>' : ''}

          <div class="info-section ${urgency === 'urgent' ? 'priority-high' : urgency === 'soon' ? 'priority-medium' : 'priority-low'}">
            <h3>📋 Client Information</h3>
            <div class="info-row">
              <span class="info-label">Full Name:</span>
              <span class="info-value"><strong>${name}</strong></span>
            </div>
            <div class="info-row">
              <span class="info-label">Email:</span>
              <span class="info-value"><a href="mailto:${email}" style="color: #667eea;">${email}</a></span>
            </div>
            ${phone ? `
            <div class="info-row">
              <span class="info-label">Phone:</span>
              <span class="info-value"><a href="tel:${phone}" style="color: #667eea;"><strong>${phone}</strong></a></span>
            </div>
            ` : ''}
            ${practiceArea ? `
            <div class="info-row">
              <span class="info-label">Practice Area:</span>
              <span class="info-value"><span style="background-color: #667eea; color: white; padding: 3px 8px; border-radius: 12px; font-size: 12px;">${practiceArea}</span></span>
            </div>
            ` : ''}
            ${caseType ? `
            <div class="info-row">
              <span class="info-label">Case Type:</span>
              <span class="info-value">${caseType}</span>
            </div>
            ` : ''}
            <div class="info-row">
              <span class="info-label">Priority:</span>
              <span class="info-value">
                <span style="background-color: ${urgency === 'urgent' ? '#ef4444' : urgency === 'soon' ? '#f59e0b' : '#3b82f6'}; color: white; padding: 3px 10px; border-radius: 12px; font-size: 12px; text-transform: uppercase;">
                  ${urgency === 'urgent' ? '🚨 URGENT' : urgency === 'soon' ? '⚡ SOON' : '📅 NORMAL'}
                </span>
              </span>
            </div>
          </div>

          <div class="message-section">
            <h3>💬 Client Message</h3>
            <div class="message-content">
              "${message.replace(/\n/g, '<br>')}"
            </div>
          </div>

          <div class="footer">
            <p><strong>Law Offices of Chris Noriega</strong></p>
            <p>📞 626-336-8080 | 🌐 noriegalaw.com</p>
            <p><em>Please respond to this inquiry promptly to provide excellent client service.</em></p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Email options
    const mailOptions = {
      from: `"Noriega Law Website" <${process.env.SMTP_FROM}>`,
      to: process.env.CHRIS_EMAIL || 'chris@noriegalaw.com',
      cc: process.env.BACKUP_EMAIL,
      subject: `${urgency === 'urgent' ? '🚨 URGENT - ' : ''}New Client Inquiry: ${practiceArea || 'General'} - ${name}`,
      html: htmlTemplate,
      text: `
        New Contact Form Submission - Noriega Law
        ========================================
        
        Date: ${new Date().toLocaleString()}
        ${urgency === 'urgent' ? '*** URGENT CASE - IMMEDIATE ATTENTION REQUIRED ***' : ''}
        
        Client Information:
        - Name: ${name}
        - Email: ${email}
        - Phone: ${phone || 'Not provided'}
        - Practice Area: ${practiceArea || 'Not specified'}
        - Case Type: ${caseType || 'Not specified'}
        - Priority: ${urgency?.toUpperCase() || 'NORMAL'}
        
        Message:
        ${message}
        
        ---
        Law Offices of Chris Noriega
        626-336-8080 | noriegalaw.com
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}