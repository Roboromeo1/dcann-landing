import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';

admin.initializeApp();

// Configure email transporter using environment variables
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_EMAIL || 'adhityaram417@gmail.com',
    pass: process.env.GMAIL_PASSWORD || '',
  },
});

// Cloud function to send contact emails
export const sendContactEmail = functions.https.onCall(async (data, context) => {
  const { submissionId, name, email, company, industry, interest, message } = data;

  try {
    // Email to DCANNAI team
    const mailToTeam = {
      from: process.env.GMAIL_EMAIL || 'adhityaram417@gmail.com',
      to: 'adhityaram417@gmail.com', // Your email to receive notifications
      subject: `🌱 New DCANNAI Contact: ${name} - ${interest || 'General Inquiry'}`,
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa;">
          <div style="background: linear-gradient(135deg, #10b981, #059669); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">New Contact Form Submission</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">DCANNAI Sustainable AI Solutions</p>
          </div>
          
          <div style="background: white; padding: 40px;">
            <h2 style="color: #2d3748; margin-bottom: 25px; font-size: 24px;">Contact Details</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 12px 0; font-weight: bold; color: #4a5568; width: 120px;">Name:</td>
                <td style="padding: 12px 0; color: #2d3748;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 12px 0; font-weight: bold; color: #4a5568;">Email:</td>
                <td style="padding: 12px 0;"><a href="mailto:${email}" style="color: #10b981; text-decoration: none;">${email}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 12px 0; font-weight: bold; color: #4a5568;">Company:</td>
                <td style="padding: 12px 0; color: #2d3748;">${company || 'Not provided'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 12px 0; font-weight: bold; color: #4a5568;">Industry:</td>
                <td style="padding: 12px 0; color: #2d3748;">${industry || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #4a5568;">Interest:</td>
                <td style="padding: 12px 0; color: #2d3748;">${interest || 'Not provided'}</td>
              </tr>
            </table>
            
            <h3 style="color: #2d3748; margin-bottom: 15px; font-size: 20px;">Message:</h3>
            <div style="background: #f7fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #10b981; margin-bottom: 30px;">
              <p style="color: #4a5568; line-height: 1.6; margin: 0;">${message}</p>
            </div>
            
            <div style="background: #e6fffa; padding: 20px; border-radius: 8px; text-align: center;">
              <p style="margin: 0; color: #2d3748;">
                <strong>Submission ID:</strong> ${submissionId}<br>
                <small style="color: #718096;">View in Firebase Console for full details</small>
              </p>
            </div>
          </div>
          
          <div style="background: #2d3748; padding: 25px; text-align: center;">
            <p style="color: #a0aec0; margin: 0; font-size: 14px;">
              Made with ❤️ from Melbourne | DCANNAI Sustainable AI Solutions
            </p>
          </div>
        </div>
      `,
    };

    // Auto-reply to customer
    const autoReply = {
      from: process.env.GMAIL_EMAIL || 'adhityaram417@gmail.com',
      to: email,
      subject: '🌱 Thank you for contacting DCANNAI - Sustainable AI Solutions',
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa;">
          <div style="background: linear-gradient(135deg, #10b981, #059669); padding: 40px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 32px;">Thank You, ${name}!</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 15px 0 0 0; font-size: 18px;">We're excited to help you with sustainable AI</p>
          </div>
          
          <div style="background: white; padding: 40px;">
            <p style="color: #2d3748; font-size: 18px; margin-bottom: 25px; line-height: 1.6;">
              Thank you for reaching out about our eco-friendly AI solutions! Your interest in sustainable technology makes a real difference.
            </p>
            
            <div style="background: #f7fafc; padding: 25px; border-radius: 12px; border-left: 4px solid #10b981; margin-bottom: 30px;">
              <h2 style="color: #2d3748; margin-top: 0; font-size: 22px;">🚀 What happens next?</h2>
              <ul style="color: #4a5568; line-height: 1.8; padding-left: 0; list-style: none;">
                <li style="padding: 8px 0; display: flex; align-items: center;">
                  <span style="color: #10b981; margin-right: 10px; font-size: 18px;">✅</span>
                  We'll review your inquiry within 24 hours
                </li>
                <li style="padding: 8px 0; display: flex; align-items: center;">
                  <span style="color: #10b981; margin-right: 10px; font-size: 18px;">🔍</span>
                  Our team will assess your sustainable AI needs
                </li>
                <li style="padding: 8px 0; display: flex; align-items: center;">
                  <span style="color: #10b981; margin-right: 10px; font-size: 18px;">📞</span>
                  We'll schedule a consultation call if appropriate
                </li>
                <li style="padding: 8px 0; display: flex; align-items: center;">
                  <span style="color: #10b981; margin-right: 10px; font-size: 18px;">📊</span>
                  You'll receive a custom proposal with environmental impact analysis
                </li>
              </ul>
            </div>
            
            <div style="background: linear-gradient(135deg, #e6fffa, #f0fdf4); padding: 25px; border-radius: 12px; margin-bottom: 30px; text-align: center;">
              <h3 style="color: #2d3748; margin-top: 0; font-size: 20px;">🌍 Why Choose DCANNAI?</h3>
              <p style="color: #4a5568; margin-bottom: 0; line-height: 1.6;">
                Our self-hosted AI solutions use <strong style="color: #10b981;">90% less energy</strong> than traditional cloud-based AI, 
                helping you achieve your business goals while protecting our planet.
              </p>
            </div>
            
            <div style="text-align: center; margin-bottom: 25px;">
              <a href="https://dcannai.com/about" style="background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 15px 30px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">
                Learn More About Our Mission
              </a>
            </div>
            
            <p style="color: #4a5568; line-height: 1.6; text-align: center;">
              Questions? Reply to this email or connect with us on 
              <a href="https://www.linkedin.com/in/adhityaram/" style="color: #10b981; text-decoration: none;">LinkedIn</a>.
            </p>
            
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
            
            <p style="color: #4a5568; margin-bottom: 0; text-align: center;">
              Best regards,<br>
              <strong style="color: #2d3748;">The DCANNAI Team</strong><br>
              <small style="color: #718096;">Building sustainable AI solutions in Melbourne</small>
            </p>
          </div>
          
          <div style="background: #2d3748; padding: 25px; text-align: center;">
            <p style="color: #10b981; margin: 0 0 10px 0; font-weight: 600; font-size: 18px;">
              DCANNAI - Sustainable AI Solutions
            </p>
            <p style="color: #a0aec0; margin: 0; font-size: 14px;">
              Made with ❤️ from Melbourne | 
              <a href="https://www.linkedin.com/in/adhityaram/" style="color: #10b981; text-decoration: none;">Connect on LinkedIn</a>
            </p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(mailToTeam);
    await transporter.sendMail(autoReply);

    // Update Firestore document with email status
    await admin.firestore().collection('contact-submissions').doc(submissionId).update({
      emailSent: true,
      emailSentAt: admin.firestore.FieldValue.serverTimestamp(),
      status: 'email-sent'
    });

    return { success: true, message: 'Emails sent successfully' };

  } catch (error: any) {
    console.error('Error sending email:', error);
    
    // Update Firestore with error
    await admin.firestore().collection('contact-submissions').doc(submissionId).update({
      emailSent: false,
      emailError: error.message,
      status: 'email-failed'
    });
    
    throw new functions.https.HttpsError('internal', 'Failed to send email');
  }
});

// Optional: Function to notify team of new submissions in real-time
export const onContactSubmission = functions.firestore
  .document('contact-submissions/{submissionId}')
  .onCreate(async (snap, context) => {
    const data = snap.data();
    
    // You could send a Slack notification, Discord webhook, etc.
    console.log(`New contact submission from ${data.name} (${data.email})`);
    
    // Optional: Trigger additional workflows
    return null;
  });